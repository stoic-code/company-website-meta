import { z } from "zod";

const blogSchema = z.object({
  title: z.string(),
  desc: z.string(),
  // category: z
  //   .string()
  //   .default("technology")
  //   .refine((value) => ["technology", "business", "marketing"].includes(value)),
  category: z.array(z.string()),
  body: z.string(),
  readTime: z.string().default("10"),
  views: z.number().default(0),
  author: z.string(),
  image: z.string().optional(),
});

export type TBlogSchema = z.infer<typeof blogSchema>;
