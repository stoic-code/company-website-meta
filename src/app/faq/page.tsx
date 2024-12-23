import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import LeftSVG from "@/assets/faq/left.svg";
import { Search } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const page = () => {
  return (
    <section>
      <FadeIn className="bg-faq py-24 text-center">
        <div className="2xl:container">
          <h1 className="py-10 text-5xl font-bold">Need Help ?</h1>
          <div className="py-4">
            <FadeIn className="item-center mx-auto flex w-[50%] gap-4 rounded-xl bg-white px-4 ring ring-ui-400 focus-within:ring focus-within:ring-offset-1">
              <Search className="self-center" size={32} strokeWidth={2} />
              <input
                className="my-2 w-full text-xl outline-none md:text-xl"
                placeholder="Search..."
              />
            </FadeIn>
          </div>
        </div>
      </FadeIn>
      <div className="mx-auto grid w-[80%] py-20 2xl:container lg:grid-cols-2">
        <div>
          <Image src={LeftSVG} alt="svg" className="hidden lg:block" />
        </div>
        <div className="">
          <h1 className="text-2xl font-bold">Frequently Asked Questions</h1>
          <div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>Is it styled?</AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that matches the other
                  components&apos; aesthetic.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>
                  Yes. It's animated by default, but you can disable it if you
                  prefer.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item4">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>
                  Yes. It's animated by default, but you can disable it if you
                  prefer.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item5">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>
                  Yes. It's animated by default, but you can disable it if you
                  prefer.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
