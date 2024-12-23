import React from "react";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { notFound } from "next/navigation";

const Hero = ({ blog }: { blog: any }) => {
  if (blog) {
    return (
      <div className="grid px-2 pb-20 pt-40 2xl:container md:px-10 lg:mx-auto lg:grid-cols-2">
        <div className="flex h-full">
          <img
            className="w-full rounded-xl object-cover"
            src={blog.image}
            alt="blog image"
          />
        </div>
        <div className="flex h-full py-4 md:px-8 lg:py-0">
          <div className="flex flex-col gap-4">
            <h5 className="text-xl font-semibold text-secondary-300">Blogs</h5>
            <h2 className="text-3xl text-blue-950 md:text-6xl">{blog.title}</h2>
            <div className="mx-auto line-clamp-5  px-2 pb-8 text-ui-500">
              {blog.desc}
            </div>

            <Link
              href={`/blogs/${blog._id} `}
              className="flex gap-2 py-4 text-blue-600"
            >
              Read More <MoveRight />
            </Link>
          </div>
        </div>
      </div>
    );
  } else return notFound();
};

export default Hero;
