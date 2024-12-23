"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

import SingleBlog from "@/components/blogs/SingleBlog";

const AllBlogs = ({ data }: { data: any[] }) => {
  const [tag, setTag] = useState("");
  const [query, setQuery] = useState("");

  // Function to filter blogs based on the selected tag
  const filteredBlogs = data.filter(
    (blog) =>
      (tag === "" || blog.category === tag) &&
      (query === "" || blog.title.toLowerCase().includes(query.toLowerCase())),
  );

  return (
    <section className="pt-10">
      <div className="bg-herobg">
        <div className="bg-center bg-no-repeat py-10 text-white 2xl:container">
          <div className="mx-1 flex flex-col gap-8 rounded-xl text-center 2xl:container sm:mx-8 md:mx-auto md:w-[80%]">
            <h3 className="font-semibold uppercase ">Our Blogs</h3>

            <p className="text-3xl font-bold capitalize md:text-4xl xl:text-5xl">
              all blog post
            </p>

            <p className="text-md px-8">
              Here, creativity knows no bounds, and innovation takes center
              stage. Whether you're an industry expert, a curious learner, or an
              aspiring entrepreneur, this is the place where ideas come to life,
              insights are shared, and knowledge is transformed into action.
            </p>
          </div>
        </div>
      </div>

      <div className="2xl:container 2xl:mx-auto">
        <div className="item-center mx-auto my-10 flex w-[50%] gap-4 rounded-xl border border-ui-300 bg-white px-4 ring-ui-400 focus-within:ring focus-within:ring-offset-1">
          <Search className="self-center" size={24} strokeWidth={2} />
          <input
            className="my-1 w-full text-xl outline-none md:text-2xl"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="flex flex-wrap items-center justify-center">
          <Button
            onClick={() => setTag("")}
            size="lg"
            className="rounded-full transition-all duration-300"
            variant={tag === "" ? "default" : "ghost"}
          >
            All
          </Button>
          <Button
            onClick={() => {
              setQuery("");
              setTag("technology");
            }}
            size="lg"
            className="rounded-full transition-all duration-300"
            variant={tag === "technology" ? "default" : "ghost"}
          >
            Technology
          </Button>

          <Button
            onClick={() => {
              setQuery("");
              setTag("business");
            }}
            size="lg"
            className="rounded-full transition-all duration-300"
            variant={tag === "business" ? "default" : "ghost"}
          >
            Business
          </Button>

          <Button
            onClick={() => {
              setQuery("");
              setTag("marketing");
            }}
            size="lg"
            className="rounded-full transition-all duration-300"
            variant={tag === "marketing" ? "default" : "ghost"}
          >
            Marketing
          </Button>
        </div>

        <div className="mx-auto w-[80%] py-24">
          {filteredBlogs ? (
            <div className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
              {filteredBlogs.map((b, idx) => (
                <SingleBlog
                  key={idx}
                  blog={{
                    _id: b._id,
                    title: b.title,
                    image: b.image,
                    views: b.views,
                    createdAt: b.createdAt,
                    readTime: b.readTime,
                  }}
                />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default AllBlogs;
