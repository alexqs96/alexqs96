import ContactForm from "@/components/Form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get in Touch",
};

export default function Contact() {
  return (
    <>
      <ContactForm />
    </>
  );
}
