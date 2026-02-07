import Link from "next/link";

const PricingBox = (props: {
  badge?: string;
  isFeatured?: boolean;
  priceLabel: string;
  packageName: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
  ctaVariant?: "primary" | "outline" | "ghost";
  note?: string;
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
    children,
  } = props;

  const buttonClass =
    ctaVariant === "outline"
      ? "border border-black/10 bg-transparent text-black hover:bg-black/5 dark:border-white/10 dark:text-white dark:hover:bg-white/10"
      : ctaVariant === "ghost"
        ? "bg-black/5 text-black hover:bg-black/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
        : "bg-primary text-white hover:opacity-90";

  const noteText = note ?? " ";

  return (
    <div className="w-full">
      <div
        className={`relative flex h-full flex-col rounded-2xl border bg-white px-8 py-10 shadow-sm transition dark:bg-black ${
          isFeatured
            ? "border-primary/30"
            : "border-black/10 dark:border-white/10"
        }`}
      >
        {badge ? (
          <div className="mb-5 flex items-center justify-between">
            <span className="rounded-full bg-black/5 px-3 py-1 text-xs font-semibold text-black/60 dark:bg-white/10 dark:text-white/60">
              {badge}
            </span>
            {isFeatured ? (
              <span className="text-primary text-xs font-semibold">
                Recommended
              </span>
            ) : null}
          </div>
        ) : null}

        <div className="mb-3">
          <h4 className="text-xl font-bold text-black dark:text-white">
            {packageName}
          </h4>
        </div>

        <div className="mb-4">
          <div className="text-[28px] font-bold text-black dark:text-white">
            {priceLabel}
          </div>
          <p
            className={`mt-2 min-h-[20px] text-sm font-medium text-black/50 dark:text-white/50 ${
              note ? "" : "opacity-0"
            }`}
          >
            {noteText}
          </p>
        </div>

        <p className="text-body-color mb-7 line-clamp-2 min-h-[48px] text-base leading-relaxed">
          {subtitle}
        </p>

        <div className="border-body-color/10 mb-6 border-b pb-6 dark:border-white/10">
          <Link
            href={ctaHref}
            className={`flex h-12 w-full items-center justify-center rounded-xl px-4 text-base font-semibold transition ${buttonClass}`}
          >
            {ctaLabel}
          </Link>
        </div>

        <div className="mt-auto">{children}</div>
      </div>
    </div>
  );
};

export default PricingBox;
