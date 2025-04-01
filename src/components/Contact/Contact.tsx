"use client";
import * as React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { sendEmail } from "@/utils/send-email";
import { contactFormSchema } from "@/utils/contactSchema";
import { Field, Label, Input, Textarea, Button } from "@headlessui/react";

import BentoSquare from "../BentoSquare";
import AnimatedPill from "../AnimatedPill";
import GitHubIcon from "@/assets/github.svg";
import LinkedInIcon from "@/assets/linkedin.svg";

import { useSpring } from "@react-spring/web";

function Contact() {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      honeypot: "",
    },
  });

  function onSubmit(values: z.infer<typeof contactFormSchema>) {
    sendEmail(values);
  }

  const [play, setPlay] = React.useState<boolean>(false);

  const spring1 = useSpring({
    from: { opacity: 0, transform: "translateX(-100%)" },
    to: play ? { opacity: 1, transform: "translateY(0)" } : {},
  });
  const spring2 = useSpring({
    from: { opacity: 0, transform: "translateX(100%)" },
    to: play ? { opacity: 1, transform: "translateY(0)" } : {},
    delay: 100,
  });
  const spring3 = useSpring({
    from: { opacity: 0, transform: "translateX(100%)" },
    to: play ? { opacity: 1, transform: "translateY(0)" } : {},
    delay: 200,
  });

  React.useEffect(() => {
    setPlay(true);
  }, []);

  return (
    <div className=" max-w-[1344px] overflow-hidden">
      <div className="flex flex-row gap-3 justify-center align-center mb-5">
        <h2 className="text-white font-bold text-2xl self-center text-center font-red_hat">
          Get in Touch
        </h2>
      </div>
      <p className="text-white text-xl mb-5 text-center">
        Want to create something together or just say hi? Feel free to send a
        message or reach out through my socials!
      </p>
      <div className="grid md:grid-cols-3 gap-5">
        <BentoSquare
          className="bg-contact_red md:col-span-2"
          trailStyle={spring1}
        >
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <Field className="mb-5">
              <Label className="mb-3 block font-black text-white font-red_hat text-xl">
                Full Name
              </Label>
              <Input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-md border bg-white py-3 px-6 text-base font-medium text-black outline-none"
                {...form.register("name", { required: true })}
              ></Input>
              <ErrorMessage
                errors={form.formState.errors}
                name="name"
                render={({ message }) => (
                  <p className="text-black">{message}</p>
                )}
              />
            </Field>
            <Field className="mb-5">
              <Label className="mb-3 block font-black text-white font-red_hat text-xl">
                Email
              </Label>
              <Input
                type="email"
                placeholder="example@domain.com"
                className="w-full rounded-md border bg-white py-3 px-6 text-base font-medium text-black outline-none"
                {...form.register("email", { required: true })}
              ></Input>
              <ErrorMessage
                errors={form.formState.errors}
                name="email"
                render={({ message }) => (
                  <p className="text-black">{message}</p>
                )}
              />
            </Field>
            <Field className="mb-5">
              <Label className="mb-3 block font-black text-white font-red_hat text-xl">
                Message
              </Label>
              <Textarea
                rows={4}
                placeholder="Type your message"
                className="w-full resize-none rounded-md border bg-white py-3 px-6 text-base font-medium text-black outline-none "
                {...form.register("message", { required: true })}
              ></Textarea>
              <ErrorMessage
                errors={form.formState.errors}
                name="message"
                render={({ message }) => (
                  <p className="text-white">{message}</p>
                )}
              />
            </Field>
            <div className="w-0 h-0 absolute left-[-9999px]">
              <input
                {...form.register("honeypot")}
                type="text"
                autoComplete="off"
                tabIndex={-1}
                className="w-0 h-0"
              ></input>
            </div>
            <Button
              type="submit"
              className="hover:shadow-form rounded-md bg-white py-3 px-8 text-base font-bold text-black outline-none hover:bg-blue-950 hover:text-white"
            >
              Send Message
            </Button>
          </form>
        </BentoSquare>
        <div className="grid grid-rows-2 gap-3 md:gap-5">
          <BentoSquare
            className="bg-peach flex justify-center items-center p-3"
            trailStyle={spring2}
          >
            <a href="https://github.com/jeeheezy" target="_blank">
              <AnimatedPill className="gap-3 group">
                <GitHubIcon className="h-small_icon fill-black group-hover:fill-white" />
              </AnimatedPill>
            </a>
          </BentoSquare>
          <BentoSquare
            className="bg-linkedin_blue flex justify-center items-center p-3"
            trailStyle={spring3}
          >
            <a href="https://www.linkedin.com/in/jeehol1999/" target="_blank">
              <AnimatedPill className="gap-3 group">
                <LinkedInIcon className="h-small_icon fill-linkedin_blue group-hover:fill-white" />
              </AnimatedPill>
            </a>
          </BentoSquare>
        </div>
      </div>
    </div>
  );
}

export default Contact;
