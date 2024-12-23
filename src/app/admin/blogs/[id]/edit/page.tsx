import React from "react";
import connectDB from "@/utils/connectDB";
import BlogPost from "@/models/BlogPost";
import EditClient from "./edit.client";
import { notFound } from "next/navigation";

const page = async ({ params }: { params: { id: string } }) => {
  await connectDB();
  const blog = await BlogPost.findById(params.id);
  if (!blog) {
    return notFound();
  } else {
    return (
      <div>
        <EditClient
          blog={{
            id: blog._id,
            title: blog.title,
            desc: blog.desc,
            image: blog.image,
            readTime: blog.readTime,
            author: blog.author,
            category: blog.category,
            body: blog.body,
          }}
        />
      </div>
    );
  }
};

export default page;
