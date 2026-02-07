import { Testimonial } from "@/types/testimonial";
import Image from "next/image";
import { Star } from "lucide-react";

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const { star, name, image, content, designation } = testimonial;

  return (
    <div className="w-full">
      <div className="group border-body-color/[.15] flex h-full flex-col rounded-2xl border bg-white/60 p-6 transition hover:-translate-y-0.5 hover:shadow-lg dark:border-white/[.15] dark:bg-white/5">
        <div className="mb-4 flex items-center gap-1">
          {Array.from({ length: star }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>

        <p className="text-body-color flex-1 text-sm leading-relaxed">
          “{content}”
        </p>

        <div className="my-5 h-px w-full bg-black/10 dark:bg-white/10" />

        <div className="flex items-center">
          <div className="relative mr-4 h-[44px] w-[44px] overflow-hidden rounded-full border border-black/10 dark:border-white/10">
            <Image src={image} alt={name} fill className="object-cover" />
          </div>

          <div className="w-full">
            <h3 className="text-dark text-base font-semibold dark:text-white">
              {name}
            </h3>
            <p className="text-body-color text-xs font-medium">{designation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
