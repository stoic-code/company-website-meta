import React from "react";
import Link from "next/link";
import { Book, Calendar, Eye } from "lucide-react";
import { dateFormatter } from "@/lib/dateConverter";

const SingleBlog = ({ blog }: { blog: any }) => {
  return (
    <Link href={`/blogs/${blog._id}`} className="">
      <div
        className="img-hover group h-52 rounded-xl transition-all duration-500"
        style={{
          backgroundImage: `url(${blog.image})`,
        }}
      ></div>

      <div className="flex justify-between px-1 py-4">
        <span className="flex gap-1 text-xs">
          <Calendar size={16} /> {dateFormatter(blog.createdAt)}{" "}
        </span>

        <span className="flex gap-1 text-xs">
          <Book size={16} />
          {blog.readTime} mins
        </span>

        <span className="flex gap-1 text-xs">
          <Eye size={16} /> {blog.views}
        </span>
      </div>
      <h5 className="line-clamp-2 px-1 font-semibold text-indigo-950">
        {blog.title}
      </h5>
    </Link>
  );
};

export default SingleBlog;
