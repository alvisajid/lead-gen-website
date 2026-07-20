import { z } from "zod";

export const BookCallFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  businessName: z.string().min(2, "Business name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .regex(/^\+?[1-9]\d{1,14}$/, "Please enter a valid phone number"),
  adBudgetRange: z.string().min(1, "Please select your current ad budget range"),
  currentChallenge: z.string().min(5, "Please tell us your biggest challenge"),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must agree to be contacted",
  }),
});

export type BookCallFormInput = z.infer<typeof BookCallFormSchema>;

