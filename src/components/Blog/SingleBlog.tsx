import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, image, paragraph, author, tags, publishDate } = blog;

  return (
    <div className="group border-body-color/[.15] overflow-hidden rounded-2xl border bg-white/60 transition hover:-translate-y-0.5 hover:shadow-lg">
      <Link href="/blog-details" className="relative block aspect-37/22 w-full">
        <Image src={image} alt={title} fill className="object-cover" />
      </Link>

      <div className="p-6">
        <h3>
          <Link
            href="/blog-details"
            className="mb-3 block text-lg leading-snug font-bold text-black transition group-hover:text-black/80"
          >
            {title}
          </Link>
        </h3>

        <p className="border-body-color/10 text-body-color mb-5 border-b pb-5 text-sm leading-relaxed">
          {paragraph}
        </p>

        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="relative h-9 w-9 overflow-hidden rounded-full border border-black/10">
              <Image src={author.image} alt={author.name} fill />
            </div>
            <div>
              <p className="text-sm font-semibold text-black">{author.name}</p>
              <p className="text-body-color text-xs">{author.designation}</p>
            </div>
          </div>

          <div className="text-right">
            <p className="text-xs font-semibold text-black/60">Date</p>
            <p className="text-body-color text-xs">{publishDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
