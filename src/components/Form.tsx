"use client";

import toast, { Toaster } from "react-hot-toast";
import { MessageSchema, type TMessageSchema } from "@/types";
import {
  FILL_EMAIL,
  FILL_MESSAGE,
  FILL_NAME,
  MESSAGE_FAIL,
  MESSAGE_SEND,
  MESSAGE_SENDING,
  MESSAGE_SENT,
} from "@/consts";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ClipBoardIcon } from "./Icons";
import Image from "next/image";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TMessageSchema>({
    resolver: zodResolver(MessageSchema),
  });

  const onSubmit = async (data: TMessageSchema) => {
    let sendButton: HTMLButtonElement = document.querySelector(
      "form button[type='submit']",
    )!;

    sendButton.textContent = MESSAGE_SENDING;
    if (sendButton) {
      try {
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("email", data.email);
        formData.append("message", data.message);

        const res = await fetch("/api/email", {
          method: "POST",
          body: formData,
        });

        console.log(res.statusText);

        if (res.status === 200) {
          sendButton.textContent = MESSAGE_SEND;

          toast.success(MESSAGE_SENT);

          setTimeout(() => {
            reset({
              message: "",
            });
          }, 4000);
        } else {
          sendButton.textContent = MESSAGE_SEND;
          throw new Error(MESSAGE_FAIL);
        }
      } catch (error) {
        sendButton.textContent = MESSAGE_SEND;

        toast.error(MESSAGE_FAIL);
      }
    }
  };

  const copyToClipboard = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(
        process.env.NEXT_PUBLIC_EMAIL_ADDRESS as string,
      );

      toast.success("Email Copied 🥳");
    } else {
      console.log("Clipboard is not available on your device.");
    }

    return null;
  };

  return (
    <>
      <Toaster />
      <h1 className="flex items-center gap-2 mb-1 text-xl font-semibold">
        Get in touch
        <Image
          className="wavehand w-[1em]"
          src="/hand.webp"
          alt="hand wave"
          unoptimized
          priority
          width={24}
          height={24}
        />
      </h1>

      <section className="flex items-center gap-2 mb-1">
        <a
          id="emailme"
          className="font-medium max-sm:text-sm -tracking-wide"
          href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_ADDRESS as string}`}
        >
          {process.env.NEXT_PUBLIC_EMAIL_ADDRESS as string}
        </a>

        <button
          onClick={() => copyToClipboard()}
          type="button"
          aria-label="Copy email into clipboard"
          className="pressable"
        >
          <ClipBoardIcon size={16} />
        </button>
      </section>

      <form
        method="POST"
        action="/api/email?nojs=true"
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-2 md:max-w-lg lg:max-w-md"
      >
        <section className="flex flex-col font-semibold">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            className={
              "border font-medium p-1.5 rounded-md bg-black/[1%] dark:bg-white/[4%] outline-1" +
              (errors.name
                ? " border-[#ef4444] dark:border-[#c02121] outline-[#ef4444] dark:outline-[#c02121] shake"
                : " border-black/10 dark:border-white/20 dark:outline-white outline-[#370cd1]")
            }
            type="text"
            autoComplete="name"
            {...register("name")}
          />
          {errors.name ? (
            <span className="bg-red-100/70 dark:bg-red-100 w-fit px-2 py-0.5 rounded-md text-[#ed3f7c] text-sm font-semibold mt-1.5 reveal shake">
              {FILL_NAME}
            </span>
          ) : null}
        </section>

        <section className="flex flex-col font-semibold">
          <label htmlFor="email">E-Mail</label>
          <input
            id="email"
            className={
              "border font-medium p-1.5 rounded-md bg-black/[1%] dark:bg-white/[4%] outline-1" +
              (errors.email
                ? " border-[#ef4444] dark:border-[#c02121] outline-[#ef4444] dark:outline-[#c02121] shake"
                : " border-black/10 dark:border-white/20 dark:outline-white outline-[#370cd1]")
            }
            type="email"
            autoComplete="email"
            inputMode="email"
            {...register("email")}
          />
          {errors.email ? (
            <span className="bg-red-100/70 dark:bg-red-100 w-fit px-2 py-0.5 rounded-md text-[#ed3f7c] text-sm font-semibold mt-1.5 reveal shake">
              {FILL_EMAIL}
            </span>
          ) : null}
        </section>

        <section className="flex flex-col font-semibold">
          <label htmlFor="message">Message</label>
          <textarea
            className={
              "border min-h-[156px] max-h-[250px] font-medium p-2 py-1 rounded-md bg-black/[1%] dark:bg-white/[4%] outline-1" +
              (errors.message
                ? " border-[#ef4444] dark:border-[#c02121] outline-[#ef4444] dark:outline-[#c02121] shake"
                : " border-black/10 dark:border-white/20 dark:outline-white outline-[#370cd1]")
            }
            id="message"
            {...register("message")}
          />
          {errors.message ? (
            <span className="bg-red-100/70 dark:bg-red-100 w-fit px-2 py-0.5 rounded-md text-[#ed3f7c] text-sm font-semibold mt-1.5 reveal shake">
              {FILL_MESSAGE}
            </span>
          ) : null}
        </section>

        <button
          disabled={isSubmitting}
          aria-label={MESSAGE_SEND}
          className="-mt-0.5 wave noAa rounded-md font-medium py-[0.4rem] px-3.5 w-fit pressable transition-opacity duration-200 hover:opacity-90 mr-auto"
          type="submit"
        >
          {MESSAGE_SEND}
        </button>
      </form>
    </>
  );
}
