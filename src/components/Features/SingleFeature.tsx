import { Feature } from "@/types/feature";

const SingleFeature = ({
  feature,
  index,
}: {
  feature: Feature;
  index: number;
}) => {
  const { title, paragraph } = feature;

  return (
    <div className="relative h-full">
      <div className="flex h-full flex-col rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black">
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <span className="text-xs font-semibold tracking-wide text-black/40 dark:text-white/40">
            {`SEMESTER ${index + 1}`}
          </span>

          <span className="rounded-full bg-black/5 px-3 py-1 text-xs font-semibold text-black/60 dark:bg-white/10 dark:text-white/60">
            {`STEP ${index + 1}`}
          </span>
        </div>

        <h3 className="mb-3 text-lg font-bold text-black dark:text-white">
          {title}
        </h3>

        <p className="flex-1 text-sm leading-relaxed text-black/60 dark:text-white/60">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
