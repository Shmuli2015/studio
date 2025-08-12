
"use server";

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

export async function submitInquiry(
  data: z.infer<typeof contactSchema>
): Promise<ContactFormState> {
  // In a real app, you would integrate with an email service like Resend or Nodemailer,
  // or save the inquiry to a database.
  console.log("New inquiry received:", data);

  // Simulate network delay to give user feedback
  await new Promise((resolve) => setTimeout(resolve, 1000));
  
  // This is where you would handle the logic and return a real success/error state.
  // For this example, we'll always return success.
  return {
    success: true,
    message: "הפנייה נשלחה בהצלחה! ניצור קשר בהקדם.",
  };
}
