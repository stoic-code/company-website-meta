import { FadeInStagger, FadeIn } from "@/components/FadeIn";
import { Search } from "lucide-react";
import React from "react";

const Main = () => {
  return (
    <section className="flex min-h-screen items-center justify-center bg-cover bg-center">
      <div>
        <FadeInStagger className="mx-1 flex flex-col gap-8 py-10 text-center 2xl:container sm:mx-8 md:mx-auto md:w-[75%]">
          <FadeIn className="font-semibold uppercase text-secondary-300">
            Our Blogs
          </FadeIn>

          <FadeIn className="text-4xl font-bold capitalize md:text-5xl xl:text-6xl">
            The Art of Innovation: Where Ideas Shape the{" "}
            <span className="text-accent-green">Future</span>
          </FadeIn>

          <FadeIn className="text-md px-8">
            A limitless hub for creativity and innovation, where ideas come to
            life and knowledge turns into action for experts, learners, and
            entrepreneurs.
          </FadeIn>

          <FadeIn className="item-center mx-auto flex w-[50%] gap-4 rounded-xl border border-ui-500 bg-white px-4 text-black ring-ui-400">
            <Search className="self-center" size={24} strokeWidth={2} />
            <input
              className="md:text-md my-1 w-full text-xl outline-none md:my-2"
              placeholder="Search..."
            />
          </FadeIn>
        </FadeInStagger>
      </div>
    </section>
  );
};

export default Main;
