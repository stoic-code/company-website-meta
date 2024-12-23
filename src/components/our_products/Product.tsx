import React from "react";
import Eyatri from "@/assets/Eyatri.svg";
import Image from "next/image";
import { FadeIn, FadeInStagger } from "../FadeIn";

const Product = () => {
  return (
    <div className="grid lg:grid-cols-2 w-full gap-y-36">
      <div className=" rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none ">
        <div className="sticky top-20">
          <Image className="w-full bg-cover " src={Eyatri} alt="eyatri image" />
        </div>
      </div>
      <div className="rounded-r-lg pr-4">
        <div className="pl-8 pt-4">
          <FadeInStagger className="my-4 list-disc flex flex-col gap-72">
            <FadeIn>
              Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
              sint cillum sint consectetur cupidatat.
            </FadeIn>
            <FadeIn>
              Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
              sint cillum sint consectetur cupidatat.
            </FadeIn>
            <FadeIn>
              Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
              sint cillum sint consectetur cupidatat.
            </FadeIn>
          </FadeInStagger>
        </div>
      </div>
    </div>
  );
};

export default Product;
