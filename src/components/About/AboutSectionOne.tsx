"use client";

import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import { useTranslation } from "@/lib/i18n/LanguageContext";

const AboutSectionOne = () => {
  const t = useTranslation();
  const cards = t.about.cards;

  return (
    <section id="about" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="border-body-color/[.15] border-b pb-16 md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                eyebrow={t.about.eyebrow}
                title={t.about.title}
                paragraph={t.about.paragraph}
                center
                mb="44px"
              />

              <div className="mx-auto mb-12 max-w-[570px] lg:mb-0">
                <div className="grid gap-4 sm:grid-cols-2">
                  {cards.map((card, index) => (
                    <article
                      key={index}
                      className="group rounded-2xl border border-black/10 bg-white p-5 transition duration-300 hover:-translate-y-0.5 hover:shadow-lg dark:border-white/[.15] dark:bg-white/5"
                    >
                      <div className="mb-3 flex items-center justify-between">
                        <span className="bg-primary/10 text-primary inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold">
                          {card.badge}
                        </span>
                        <span className="text-body-color/60 text-xs font-medium">
                          {card.category}
                        </span>
                      </div>
                      <h3 className="text-dark mb-2 text-base font-semibold dark:text-white">
                        {card.title}
                      </h3>
                      <p className="text-body-color text-sm leading-relaxed">
                        {card.description}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <figure className="relative mx-auto aspect-25/24 max-w-[600px] overflow-hidden rounded-2xl bg-gray-100 lg:mr-0">
                <Image
                  src="/images/about/textbook.jpg"
                  alt={t.about.imageAlt}
                  fill
                  className="object-contain"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
