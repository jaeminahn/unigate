import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UNIGATE - Ajukan Konsultasi",
  description:
    "Halaman konsultasi UNIGATE. Kirimkan informasi Anda dan kami akan segera menghubungi Anda melalui email.",
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
