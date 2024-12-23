"use server";
import BlogPost from "@/models/BlogPost";
import { revalidatePath } from "next/cache";
import { connectToDatabase } from "./jobs.actions";
import { TBlogSchema } from "@/schemas/blogschema";

export const createNewBlog = async (data: TBlogSchema) => {
  await connectToDatabase();
  try {
    const blog = new BlogPost({
      title: data.title,
      desc: data.desc,
      body: data.body,
      categories: data.category,
      readTime: data.readTime,
      author: data.author,
      image: data.image,
    });
    await blog.save();
    revalidatePath("/blogs");
    revalidatePath("/admin/blogs");
    return { message: "Created Blog Successfully !!!", success: true };
  } catch (error) {
    console.log(error);
    return {
      message: "Server Error",
      desc: "If You are a developer see on server console",
      success: false,
    };
  }
};

export const editBlog = async (id: string, data: TBlogSchema) => {
  await connectToDatabase();
  try {
    const updatedBlog = await BlogPost.findByIdAndUpdate(id, {
      title: data.title,
      desc: data.desc,
      category: data.category,
      image: data.image,
      readTime: data.readTime,
      author: data.author,
      body: data.body,
    });

    revalidatePath("/blogs");
    revalidatePath("/admin/blogs");
    return { message: "Blog updated successfully!!", success: true };
  } catch (error) {
    console.log(error);
    return {
      message: "Server Error",
      desc: "If You are a developer see on server console",
      success: false,
    };
  }
};

export const deleteBlog = async (id: string) => {
  await connectToDatabase();
  try {
    const deleteBlog = await BlogPost.findByIdAndDelete(id);
    revalidatePath("/blogs");
    revalidatePath("/admin/blogs");
    return { message: "Blog deleted successfully!!", success: true };
  } catch (error) {
    console.log(error);
    return {
      message: "Server Error",
      desc: "If You are a developer see on server console",
      success: false,
    };
  }
};
