import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData";

const Brands = () => {
  const shouldMarquee = brandsData.length > 6;

  return (
    <section className="pt-16">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="bg-gray-light rounded-xs px-8 py-8 sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]">
              {shouldMarquee ? (
                <Marquee brands={brandsData} />
              ) : (
                <div className="flex flex-wrap items-center justify-center">
                  {brandsData.map((brand) => (
                    <SingleBrand key={brand.id} brand={brand} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const Marquee = ({ brands }: { brands: Brand[] }) => {
  const doubled = [...brands, ...brands];

  return (
    <div className="relative overflow-hidden">
      <div className="marquee-motion flex w-max gap-2 hover:[animation-play-state:paused] motion-reduce:animate-none">
        {doubled.map((brand, idx) => (
          <MarqueeBrand key={`${brand.id}-${idx}`} brand={brand} />
        ))}
      </div>

      <div className="from-gray-light pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l to-transparent" />
    </div>
  );
};

const MarqueeBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, name } = brand;

  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow noreferrer"
      className="flex h-12 w-[160px] items-center justify-center px-3 opacity-70 transition hover:opacity-100"
      aria-label={name}
    >
      <Image
        src={image}
        alt={name}
        width={160}
        height={48}
        className="max-h-12 w-auto object-contain"
      />
    </a>
  );
};

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, name } = brand;

  return (
    <div className="flex w-1/2 items-center justify-center px-3 py-[15px] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="flex h-12 w-full items-center justify-center opacity-70 transition hover:opacity-100"
      >
        <Image
          src={image}
          alt={name}
          width={160}
          height={48}
          className="max-h-12 w-auto object-contain"
        />
      </a>
    </div>
  );
};
