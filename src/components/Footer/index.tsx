"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram, Youtube, Linkedin, NotebookPen } from "lucide-react";

const Footer = () => {
  const menu = [
    { title: "Home", href: "/" },
    { title: "회사 소개", href: "/" },
    { title: "커리큘럼", href: "/" },
    { title: "협약 기관", href: "/" },
    { title: "문의", href: "/contact" },
  ];

  const social = [
    { label: "Instagram", href: "/", icon: Instagram },
    { label: "Naver Blog", href: "/", icon: NotebookPen },
    { label: "YouTube", href: "/", icon: Youtube },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/company/unigatekr",
      icon: Linkedin,
    },
  ];

  return (
    <footer className="relative z-10 bg-white pt-16 md:pt-20 lg:pt-24">
      <div className="container">
        <div className="-mx-4 flex flex-wrap gap-y-10">
          <div className="w-full px-4 lg:w-5/12 xl:w-5/12">
            <div className="max-w-[380px]">
              <Link href="/" className="mb-6 inline-flex items-center">
                <Image
                  src="/images/logo/logo-2.svg"
                  alt="logo"
                  width={140}
                  height={30}
                  className="h-[30px] w-auto"
                  priority
                />
              </Link>

              <p className="text-body-color mb-6 text-sm leading-relaxed">
                국내 유일 성공적인 편입학을 위한 AI 기반 전공 맞춤 한국어
                교육을 제공합니다.
              </p>

              <div className="flex items-center gap-4">
                {social.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-body-color/[.15] text-body-color hover:text-primary inline-flex h-10 w-10 items-center justify-center rounded-2xl border bg-white/60 transition hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
            <h2 className="mb-5 text-base font-bold text-black">메뉴</h2>
            <ul className="space-y-3">
              {menu.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="text-body-color hover:text-primary text-sm transition"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
            <h2 className="mb-5 text-base font-bold text-black">정책</h2>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/terms"
                  className="text-body-color hover:text-primary text-sm transition"
                >
                  이용약관
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-body-color hover:text-primary text-sm transition"
                >
                  개인정보처리방침
                </Link>
              </li>
              <li>
                <Link
                  href="/refund"
                  className="text-body-color hover:text-primary text-sm transition"
                >
                  환불 규정
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="w-full px-4 lg:w-3/12">
            <h2 className="mb-5 text-base font-bold text-black">문의</h2>
            <ul className="space-y-3">
              <li className="text-body-color text-sm">
                이메일: contact@unigate.kr
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-[#D2D8E183] to-transparent" />

        <div className="py-8">
          <p className="text-body-color text-center text-xs font-medium">
            © {new Date().getFullYear()} UNIGATE. All rights reserved.{" "}
            <span className="text-body-color/70">
              <br className="block lg:hidden" />
              교재·콘텐츠 및 사이트 내 모든 자료의 무단 복제·배포를 금합니다.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
