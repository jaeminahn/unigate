"use client";

import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import { useTranslation } from "@/lib/i18n/LanguageContext";

const Features = () => {
  const t = useTranslation();
  const featuresData = t.features.items;

  return (
    <section
      id="curriculum"
      className="py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          eyebrow={t.features.eyebrow}
          title={t.features.title}
          paragraph={<>{t.features.paragraph}</>}
          center
        />

        <ol className="relative mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {featuresData.map((feature, index) => (
            <li key={index}>
              <SingleFeature feature={{ ...feature, id: index + 1 }} index={index} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Features;
