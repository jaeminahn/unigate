import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UNIGATE - Konsultasi Gratis",
  description:
    "Masih bingung atau punya pertanyaan? Isi data Anda di bawah ini, kami akan membantu melalui email.",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb titleKey="contact" description="" />
      <Contact />
    </>
  );
};

export default ContactPage;
