"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { editBlog } from "@/actions/blogs.actions";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import AdminEditor from "@/components/editor/AdminEditor";

const EditClient = ({ blog }: { blog: any }) => {
  const router = useRouter();
  const { toast } = useToast();

  const [title, setTitle] = useState(blog.title);
  const [category, setCategory] = useState(blog.category);
  const [desc, setDesc] = useState(blog.desc);
  const [body, setBody] = useState(blog.body);
  const [readTime, setReadTime] = useState(blog.readTime);
  const [author, setAuthor] = useState(blog.author);
  const [image, setImage] = useState(blog.image);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    const res = await editBlog(blog.id, {
      title,
      category,
      body,
      readTime,
      author,
      image,
      desc,
      views: 0,
    });
    toast({
      title: res.message,
      description: res.desc ? res.desc : "",
      variant: res.success ? "success" : "destructive",
    });
    router.push("/admin/blogs");
  };

  return (
    <div className="container my-12 w-full gap-8">
      <div>
        <div className="">
          <Label>Blog Title</Label>
          <Input
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
            placeholder="Eg: How ChatGPT was made ? "
          />
        </div>

        <div className="">
          <Label>Blog Desc</Label>
          <Textarea
            rows={2}
            maxLength={300}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            value={desc}
            placeholder="This desc will go in blog hero page and meta description"
          />
        </div>

        <div className="">
          <Label>Image URL</Label>
          <Input
            onChange={(e) => {
              setImage(e.target.value);
            }}
            placeholder="Eg: https://img.com/adde1e2ie1"
            value={image}
          />
        </div>

        <div className="">
          <Label>Read Time</Label>
          <Input
            onChange={(e) => {
              setReadTime(e.target.value);
            }}
            type="number"
            placeholder="Eg: 10 "
            value={readTime}
          />
        </div>

        <div className="">
          <Label>Author Name</Label>
          <Input
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
            placeholder="Eg: MetaLogic"
            value={author}
          />
        </div>

        <div className="w-fit">
          <Label>Category</Label>
          <Select
            onValueChange={(e) => {
              setCategory(e);
            }}
            value={category}
          >
            <SelectTrigger>
              <SelectValue placeholder="Categry" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="technology">Technology</SelectItem>
              <SelectItem value="business">Business</SelectItem>
              <SelectItem value="marketing">Marketing</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-8 py-8">
          <div>
            <Label>Body</Label>
            <AdminEditor value={body} setValue={setBody} />
          </div>
        </div>
        <Button className="my-4" disabled={loading} onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default EditClient;
