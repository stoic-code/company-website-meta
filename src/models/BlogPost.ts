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
    categories: [{ type: String }],
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

const BlogPost =
  mongoose.models.BlogPost || mongoose.model("BlogPost", blogSchema);

export default BlogPost;
