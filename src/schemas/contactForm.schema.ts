import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z.string().min(1, { message: "Full Name is required." }),
  email: z
    .string()
    .min(1, { message: "Email is required." })
    .email({ message: "Must be a valid email." }),
  contact: z
    .string()
    .min(1, { message: "Contact is required." })
    .max(10, { message: "Contact cannot be more than 10 characters." }),
  companyName: z.string().optional(),
  companyLocation: z.string().optional(),
  description: z.string().min(1, { message: "Description is required." }),
  agree: z.boolean().refine((val) => val === true, {
    message: "You must read and accept our privacy policy to proceed.",
  }),
});

export type TContactForm = z.infer<typeof contactFormSchema>;
