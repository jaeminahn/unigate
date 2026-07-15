import { ReactNode } from "react";

const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "100px",
  eyebrow,
}: {
  title: ReactNode;
  paragraph: ReactNode;
  width?: string;
  center?: boolean;
  mb?: string;
  eyebrow?: string;
}) => {
  return (
    <>
      <div
        className={`w-full ${center ? "mx-auto text-center" : ""}`}
        style={{ maxWidth: width, marginBottom: mb }}
      >
        {eyebrow ? (
          <span className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold tracking-wide text-primary uppercase">
            {eyebrow}
          </span>
        ) : null}
        <h2 className="mb-4 text-3xl leading-tight! font-bold text-black sm:text-4xl md:text-[45px]">
          {title}
        </h2>
        <p className="text-body-color text-base leading-relaxed! md:text-lg">
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
