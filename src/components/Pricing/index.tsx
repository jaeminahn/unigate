"use client";

import SectionTitle from "../Common/SectionTitle";
import PricingBox from "./PricingBox";
import OfferList from "./OfferList";
import { useTranslation } from "@/lib/i18n/LanguageContext";

const Pricing = () => {
  const t = useTranslation();
  const entry = t.pricing.entry;
  const semester = t.pricing.semester;

  return (
    <section
      id="pricing"
      className="relative z-10 py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          eyebrow={t.pricing.eyebrow}
          title={t.pricing.title}
          paragraph={<>{t.pricing.paragraph}</>}
          center
          width="665px"
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2">
          <PricingBox
            badge={entry.badge}
            packageName={entry.packageName}
            priceLabel={entry.priceLabel}
            subtitle={entry.subtitle}
            ctaLabel={entry.cta}
            ctaHref="/"
            ctaVariant="primary"
            note={entry.note}
          >
            {entry.features.map((text, i) => (
              <OfferList key={i} text={text} status={i < 2 ? "active" : "inactive"} />
            ))}
          </PricingBox>

          <PricingBox
            isFeatured
            badge={semester.badge}
            packageName={semester.packageName}
            priceLabel={
              <>
                {semester.priceLabel}
                <span className="ml-1 text-sm font-normal opacity-70">
                  {semester.priceUnit}
                </span>
              </>
            }
            subtitle={semester.subtitle}
            ctaLabel={semester.cta}
            ctaHref="/"
            ctaVariant="primary"
            note={semester.note}
            recommendedLabel={semester.recommended}
          >
            {semester.features.map((text, i) => (
              <OfferList key={i} text={text} status="active" />
            ))}
          </PricingBox>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
