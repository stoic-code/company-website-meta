import React from "react";
import Link from "next/link";

const Blog = () => {
  return (
    <Link href="/blogs/id" className="group mx-auto w-[80%]">
      <div
        style={{
          backgroundImage: `url(https://img.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-139717.jpg)`,
        }}
        className="img-hover h-52 bg-cover bg-center"
      ></div>
      <p className="flex justify-between py-4 text-ui-600">
        <span>By: Writer Name</span>
        <span>Jan 20, 2024</span>
      </p>
      <h1 className="line-clamp-2 text-xl font-bold transition-all duration-300 group-hover:text-blue-950 group-hover:underline">
        Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
        cillum sint consectetur cupidatat.
      </h1>
      <p></p>
    </Link>
  );
};

const Explore = () => {
  return (
    <div className="container my-10">
      <h1 className="py-12 text-4xl font-bold">Weekly Top Blogs</h1>
      <div className="grid h-full gap-8 overflow-hidden lg:grid-cols-2">
        <Link href="/blogs/id" className="group">
          <div className="h-full">
            <div
              className="img-hover h-[400px] bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://img.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-139717.jpg)",
              }}
            ></div>
            <p className="flex justify-between py-10 text-ui-600">
              <span>By: Writer Name</span>
              <span>Jan 20, 2024</span>
            </p>
            <h1 className="line-clamp-2 text-xl font-bold transition-all duration-300 group-hover:text-blue-950 group-hover:underline">
              Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
              sint Lorem ipsum dolor sit amet, qui minim labore adipisicing
              minim sint cillum sint consectetur cupidatat.
            </h1>
          </div>
        </Link>
        <div className="flex h-full flex-col items-stretch gap-8">
          <Blog />
          <Blog />
        </div>
      </div>
    </div>
  );
};

export default Explore;
