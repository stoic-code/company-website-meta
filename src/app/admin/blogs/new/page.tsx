"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { createNewBlog } from "@/actions/blogs.actions";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import AdminEditor from "@/components/editor/AdminEditor";

const page = () => {
  const { toast } = useToast();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState<string[]>([]);
  const [desc, setDesc] = useState("");
  const [body, setBody] = useState("");
  const [readTime, setReadTime] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    const res = await createNewBlog({
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
    setLoading(false);
    setTitle("");
    setCategory([]);
    setBody("");
    setAuthor("");
    setReadTime("");
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checkboxValue = event.target.id;

    // Check if the checkbox is checked or unchecked
    if (event.target.checked) {
      // Checkbox is checked, add the value to the array
      setCategory((prevCategory) => [...prevCategory, checkboxValue]);
    }
    if (!event.target.checked) {
      // Checkbox is unchecked, remove the value from the array
      setCategory((prevCategory) =>
        prevCategory.filter((item) => item !== checkboxValue),
      );
    }
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
          {/* <Select
            onValueChange={(e) => {
              setCategory([...category, e]);
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Categry" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="technology">Technology</SelectItem>
              <SelectItem value="business">Business</SelectItem>
              <SelectItem value="marketing">Marketing</SelectItem>
            </SelectContent>
          </Select> */}
        </div>
        <div className="flex gap-4">
          <div className="flex gap-2">
            <input
              onChange={handleCheckboxChange}
              id="technology"
              type="checkbox"
            />
            <label htmlFor="technology">Technology</label>
          </div>

          <div className="flex gap-2">
            <input
              onChange={handleCheckboxChange}
              id="marketing"
              type="checkbox"
            />
            <label htmlFor="marketing">Marketing</label>
          </div>

          <div className="flex gap-2">
            <input
              onChange={handleCheckboxChange}
              id="business"
              type="checkbox"
            />
            <label htmlFor="business">Business</label>
          </div>
        </div>
        {category.map((c, idx) => (
          <span key={idx} className="rounded-full bg-gray-200 px-2 py-1">
            {c}
          </span>
        ))}

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

export default page;
