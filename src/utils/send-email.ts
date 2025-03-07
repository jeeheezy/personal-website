import { contactFormSchema } from "./contactSchema";
import { z } from "zod";
import toast from "react-hot-toast";

export async function sendEmail(data: z.infer<typeof contactFormSchema>) {
  // TODO:
  // time restriction on form
  // check IP?

  try {
    const res = await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const response = await res.json();

    if (response.success === true) {
      toast(response.message);
    } else {
      toast.error(response.message);
    }
  } catch (err) {
    alert(err);
  }
  console.log(data);
}
