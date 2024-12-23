import { register } from "module";
import { z } from "zod";

export const partnershipFormSchema = z
  .object({
    fullName: z.string().min(1, { message: "Full Name is required." }).trim(),
    province: z.string().min(2, { message: "Province is required." }).trim(),
    district: z.string().min(2, { message: "District is required." }).trim(),
    local: z.string().min(2, { message: "Local address is required." }).trim(),
    email: z.string().email({ message: "Invalid email format." }).trim(),
    contact: z
      .string()
      .min(10, { message: "Contact no should be atleast 10 characters." })
      .max(10, { message: "Contact no sholdn't be more than 10 characters." }),
    experiences: z.object({
      experience: z
        .string({ invalid_type_error: "Please select at least 1 option." })
        .min(2, { message: "Experience is required." }),
      other: z.string().trim().optional(),
    }),
    salesExperience: z
      .string({ invalid_type_error: "Please select an option." })
      .min(1, { message: "Please select an option." }),
    skills: z.object({
      skill: z
        .array(z.string(), {
          invalid_type_error: "Please select at least 1 option.",
        })
        .min(1, { message: "Please select at least 1 option." }),
      other: z.string().trim().optional(),
    }),
    interests: z.object({
      interest: z
        .array(z.string(), {
          invalid_type_error: "Please select at least 1 option.",
        })
        .min(1, { message: "Please select at least 1 option." }),
      other: z.string().trim().optional(),
    }),
    sourcings: z.object({
      sourcing: z
        .array(z.string(), {
          invalid_type_error: "Please select at least 1 option.",
        })
        .min(1, { message: "Please select at least 1 option." }),
      other: z.string().trim().optional(),
    }),
    industries: z.object({
      industry: z
        .array(z.string(), {
          invalid_type_error: "Please select at least 1 option.",
        })
        .min(1, { message: "Please select at least 1 option." }),
      other: z.string().trim().optional(),
    }),
    contributions: z.object({
      contribution: z
        .array(z.string(), {
          invalid_type_error: "Please select at least 1 option.",
        })
        .min(1, { message: "Please select at least 1 option." }),
      other: z.string().trim().optional(),
    }),
    additionalInformation: z.string().trim().optional(),
    refered: z.string({
      invalid_type_error: "Please select any one option.",
      required_error: "Please select any one option.",
    }),
    referer: z.string().optional(),
    agree: z.boolean().refine((val) => val === true, {
      message: "You must read and accept our privacy policy to proceed.",
    }),
  })
  .superRefine(({ refered, referer }, ctx) => {
    if (refered === "true") {
      if (!referer || referer.length < 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Name of the referer is required.",
          path: ["referer"],
        });
      }
    }
  });

export type TPartnershipForm = z.infer<typeof partnershipFormSchema>;
