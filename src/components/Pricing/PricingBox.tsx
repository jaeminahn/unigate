import Link from "next/link";
import { ReactNode } from "react";

const PricingBox = (props: {
  badge?: string;
  isFeatured?: boolean;
  priceLabel: ReactNode;
  packageName: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
  ctaVariant?: "primary" | "outline" | "ghost";
  note?: string;
  recommendedLabel?: string;
  children: React.ReactNode;
}) => {
  const {
    badge,
    isFeatured,
    priceLabel,
    packageName,
    subtitle,
    ctaLabel,
    ctaHref,
    ctaVariant = "primary",
    note,
    recommendedLabel,
    children,
  } = props;

  const buttonClass =
    ctaVariant === "outline"
      ? "border border-black/10 bg-transparent text-black hover:bg-black/5"
      : ctaVariant === "ghost"
        ? "bg-black/5 text-black hover:bg-black/10"
        : "bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/15";

  const noteText = note ?? " ";

  return (
    <article
      className={`relative flex h-full flex-col rounded-2xl border bg-white px-8 py-10 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-lg ${
        isFeatured
          ? "border-primary/40 shadow-primary/10"
          : "border-black/10 dark:border-white/10"
      }`}
    >
      {isFeatured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-white shadow-sm">
          {recommendedLabel}
        </div>
      )}

      {badge ? (
        <div className="mb-5 flex items-center justify-between">
          <span className="rounded-full bg-black/5 px-3 py-1 text-xs font-semibold text-black/60">
            {badge}
          </span>
        </div>
      ) : null}

      <div className="mb-3">
        <h4 className="text-xl font-bold text-black">{packageName}</h4>
      </div>

      <div className="mb-4">
        <div className="text-[28px] font-bold text-black">{priceLabel}</div>
        <p
          className={`mt-2 min-h-[20px] text-sm font-medium text-black/50 ${
            note ? "" : "opacity-0"
          }`}
        >
          {noteText}
        </p>
      </div>

      <p className="text-body-color mb-7 line-clamp-2 min-h-[48px] text-base leading-relaxed">
        {subtitle}
      </p>

      <div className="border-body-color/10 mb-6 border-b pb-6">
        <Link
          href={ctaHref}
          className={`flex h-12 w-full items-center justify-center rounded-xl px-4 text-base font-semibold transition ${buttonClass}`}
        >
          {ctaLabel}
        </Link>
      </div>

      <div className="mt-auto">{children}</div>
    </article>
  );
};

export default PricingBox;
