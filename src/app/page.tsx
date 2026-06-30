import AboutSectionOne from "@/components/About/AboutSectionOne";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UNIGATE - Pendidikan Bahasa Korea Berbasis AI Sesuai Jurusan",
  description:
    "Pendidikan bahasa Korea berbasis AI yang disesuaikan dengan jurusan untuk transfer yang sukses ke universitas Korea.",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <AboutSectionOne />
      <Pricing />
      <Contact />
    </>
  );
}
