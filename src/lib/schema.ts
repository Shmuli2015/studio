import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, { message: "שם חייב להכיל לפחות 2 תווים." }),
  phone: z
    .string()
    .min(9, { message: "מספר טלפון לא תקין." })
    .regex(/^0\d{8,9}$/, { message: "מספר טלפון לא תקין." }),
  date: z.date().optional(),
  notes: z
    .string()
    .max(500, { message: "ההערות יכולות להכיל עד 500 תווים." })
    .optional(),
});

export type ContactFormState = {
  message: string;
  success: boolean;
};
