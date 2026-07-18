import Breadcrumb from "@/components/Common/Breadcrumb";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UNIGATE - Tentang Kami",
  description:
    "Dari Dasar hingga Pembelajaran Sesuai Jurusan dengan Materi Ajar yang Dikembangkan Sendiri",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb pageName="Tentang Kami" description="" />
      <AboutSectionOne />
    </>
  );
};

export default AboutPage;
