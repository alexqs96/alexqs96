import { allPosts } from "contentlayer/generated";
import { Mdx } from "@/components/Mdx";
import { FormatDate } from "@/utils/time";
import Image from "next/image";
import NotFound from "@/app/not-found";
import { GoUpLogo } from "@/components/Icons";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) return <NotFound />;
  return { title: post.title };
};

const PostArticle = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) return <NotFound />;

  return (
    <>
      <article className="md:min-w-full mt-4 prose dark:prose-invert prose-img:shadow prose-img:rounded-md prose-a:font-semibold prose-a:no-underline prose-a:border-b-4 prose-a:border-indigo-500">
        {post.cover ? (
          <Image
            width={1024}
            height={512}
            className="w-full mt-0 mb-3 aspect-[16/7] object-cover shadow-xl"
            src={post.cover}
            alt={post.title + " image"}
            unoptimized
            priority
          />
        ) : null}

        <div className="sm:pt-8">
          <h1 className="mb-0 text-5xl md:text-6xl">{post.title}</h1>
          <h2 className="mt-3 font-medium">{post.description}</h2>
          <small className="-mt-4 block opacity-80">
            Published at {FormatDate(post.date)}
          </small>
        </div>
        <Mdx code={post.body.code} />
      </article>
      <a
        href="#top"
        aria-label="Go to Top"
        className="max-xl:hidden absolute -right-[10%] 2xl:-right-[20%]  bottom-24 flex items-center p-2.5 bg-[#370cd1] text-white rounded-full hover:opacity-90 pressable"
      >
        <GoUpLogo size={18} />
      </a>
    </>
  );
};

export default PostArticle;
