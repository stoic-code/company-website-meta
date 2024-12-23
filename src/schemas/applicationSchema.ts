import { z } from "zod";

const MAX_FILE_SIZE = 1024 * 1024 * 10;
const ACCEPTED_FILE_TYPES = [
  "application/pdf",
  "application/msword",
  "text/plain",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

export const applicationSchema = z
  .object({
    jobId: z.string(),
    firstName: z.string().min(1, { message: "First name is required." }),
    lastName: z.string().min(1, { message: "Last name is required." }),
    email: z
      .string()
      .email({ message: "Must be a valid email." })
      .min(1, { message: "Email is required." }),
    contact: z.string().min(10, { message: "Must be a valid contact." }),
    linkedIn: z.string().optional(),
    coverLetter: z.string().min(1, { message: "Cover letter is required." }),
    province: z.string().min(1, { message: "Province is required." }),
    district: z.string().min(1, { message: "District is required." }),
    local: z.string().min(1, { message: "Local area is required." }),
    fileType: z.enum(["resume", "document"]),

    image: z
      .any()
      .refine(
        (file) => !file || file?.size <= MAX_FILE_SIZE,
        `Max file size is 10MB.`,
      ),

    resume: z
      .any()
      .refine(
        (file) => !file || file?.size <= MAX_FILE_SIZE,
        "Max file size is 10MB.",
      )
      .refine(
        (file) => !file || ACCEPTED_FILE_TYPES.includes(file?.type),
        ".pdf, .doc, .docx, and .txt files are accepted.",
      ),

    citizenship_front: z
      .any()
      .refine(
        (file) => !file || file?.size <= MAX_FILE_SIZE,
        `Max file size is 10MB.`,
      ),

    citizenship_back: z
      .any()
      .refine(
        (file) => !file || file?.size <= MAX_FILE_SIZE,
        `Max file size is 10MB.`,
      ),
  })
  .superRefine(
    ({ resume, fileType, citizenship_front, citizenship_back, image }, ctx) => {
      if (fileType === "resume" && !resume) {
        console.log("RESUME", !resume);
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Resume is required.",
          path: ["resume"],
        });
      }

      if (fileType === "document") {
        if (!citizenship_front) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Citizenship front is required.",
            path: ["citizenship_front"],
          });
        }

        if (!citizenship_back) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Citizenship back is required.",
            path: ["citizenship_back"],
          });
        }

        if (!image) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Photo is required.",
            path: ["image"],
          });
        }
      }
    },
  );

export type TApplicationSchema = z.infer<typeof applicationSchema>;
