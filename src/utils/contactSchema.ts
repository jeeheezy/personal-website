import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(1, {
    message: "A name is required",
  }),
  email: z.string().trim().email(),
  message: z.string().min(1, {
    message: "A message is required",
  }),
  honeypot: z.string().max(0, "This field should not be filled out"),
});
