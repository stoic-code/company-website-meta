import { Metadata, ResolvingMetadata } from "next";

import Image from "next/image";
import React from "react";
import "./blog.css";
import connectDB from "@/utils/connectDB";
import SingleBlog from "@/components/blogs/SingleBlog";
import ShareButton from "@/components/ShareButton";
import { RichContentPreview } from "@/components/editor/Editor";

import BlogPost from "@/models/BlogPost";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
) {
  await connectDB();
  const blog = await BlogPost.findById(params.id);

  return {
    title: blog.title,
    description: blog.desc,
    keywords: blog.keywords,
    openGraph: {
      images: [blog.image, "https://metalogic.com.np/metalogo.png"],
    },
  };
}

const page = async ({ params }: { params: { id: string } }) => {
  await connectDB();
  const blog = await BlogPost.findById(params.id);
  const blogs = await BlogPost.find().limit(3).sort({ createdAt: -1 });

  fetch("http://localhost:3000/api/uid", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ blog: params.id }),
  });

  return (
    <div className="px-4 pt-52 lg:mx-auto lg:max-w-4xl">
      <h1 className="text-center text-5xl font-bold text-blue-950">
        {blog.title}
      </h1>
      <div className="flex flex-col items-center justify-center pt-24">
        <div className="py-8 text-ui-500">
          <Image
            src="/metalogo.png"
            alt="user dp"
            height={100}
            width={100}
            className="mx-2 inline-block h-8 w-8"
          />
          <span>By: </span>
          <span className="font-semibold text-ui-600">{blog.author}</span>{" "}
          <span>Updated on: 4th July 2023</span>
          <span className="block text-center font-bold text-ui-600">
            {blog.readTime} Mins Read
          </span>
        </div>
      </div>

      <div className="blog-content flex flex-col gap-8 text-ui-600">
        <img src={blog.image} className="rounded-xl" />
        <RichContentPreview html={blog.body} />
      </div>

      <div className="flex flex-wrap justify-between gap-6 py-12">
        <div className="flex gap-4">
          {blog.categories.map((c: string) => (
            <div className="rounded-3xl bg-primary-400 px-4 py-2 text-indigo-950">
              {c}
            </div>
          ))}
        </div>

        <ShareButton
          title={blog.title}
          url={`https://metalogic.com.np/blogs/${blog.id}`}
        />
        {/* <div className="rounded-3xl bg-primary-400 px-4 py-2 text-indigo-950">
          Artificial Intellegence
        </div>
        <div className="rounded-3xl bg-primary-400 px-4 py-2 text-indigo-950">
          Business
        </div>
        <div className="rounded-3xl bg-primary-400 px-4 py-2 text-indigo-950">
          Chat GPT
        </div> */}
      </div>

      <div className="mb-16">
        <h5 className="py-8 pl-4 text-2xl font-bold">Latest articles</h5>
        <div className="grid gap-x-4 gap-y-12 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
          {blogs && blogs.map((b, idx) => <SingleBlog key={idx} blog={b} />)}
        </div>
      </div>
    </div>
  );
};

export default page;
