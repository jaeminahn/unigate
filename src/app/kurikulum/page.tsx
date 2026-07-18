import Breadcrumb from "@/components/Common/Breadcrumb";
import Features from "@/components/Features";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UNIGATE - Kurikulum",
  description:
    "Roadmap Kurikulim 4 Semester - Pembelajaran bahasa Korea secara bertahap, dari dasar hingga praktik untuk mencapai target belajar.",
};

const CurriculumPage = () => {
  return (
    <>
      <Breadcrumb pageName="Kurikulum" description="" />
      <Features />
    </>
  );
};

export default CurriculumPage;
