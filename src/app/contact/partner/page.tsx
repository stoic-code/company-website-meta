import React from "react";
import Content from "./Content";
import Form from "./Form";

const page = () => {
  return (
    <div
      style={{
        background: "url(/partner/blur-circle.svg) top left no-repeat ",
        backgroundSize: "50% 50%",
      }}
      className="min-h-screen"
    >
      <div className="gap-y-6 px-2 py-28 2xl:container md:mx-auto md:max-w-3xl">
        <Content />
        <div className="my-8 h-[1px] bg-neutral-200" />
        <h1 className="mb-8 text-3xl font-bold text-blue-950 md:text-4xl">
          Apply to become a <span className="text-green-600">Partner</span>
        </h1>
        <Form />
      </div>
    </div>
  );
};

export default page;
