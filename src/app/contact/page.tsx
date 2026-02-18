import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UNIGATE - 상담 신청",
  description:
    "UNIGATE 상담 신청 페이지입니다. 정보를 남겨주시면 이메일로 빠르게 안내드리겠습니다.",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb pageName="문의" description="" />
      <Contact />
    </>
  );
};

export default ContactPage;
