import Breadcrumb from "@/components/Common/Breadcrumb";
import Partners from "@/components/Partners";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UNIGATE - Institusi Mitra",
  description: "Saat ini kami belum memiliki institusi mitra.",
};

const PartnersPage = () => {
  return (
    <>
      <Breadcrumb pageName="Institusi Mitra" description="" />
      <Partners />
    </>
  );
};

export default PartnersPage;
