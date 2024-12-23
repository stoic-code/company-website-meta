import mongoose, { InferSchemaType } from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      default: "technology",
      enum: ["technology", "business", "marketing"],
    },
    body: {
      type: String,
      required: true,
    },
    readTime: {
      type: String, //time in minutes
      default: 10,
      required: true,
    },
    views: {
      type: Number, //to be updated everytime blog is requested
      default: 0,
    },
    author: {
      type: String,
      required: true,
    },
    image: {
      type: "string",
    },
  },
  { timestamps: true },
);

export type TModelBlog = InferSchemaType<typeof blogSchema>;

const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);

export default Blog;
