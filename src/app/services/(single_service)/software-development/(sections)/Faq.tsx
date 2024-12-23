import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQs = ({
  faqs,
}: {
  faqs: { id: string; title: string; content: string }[];
}) => {
  return (
    <section>
      <div className="py-20  2xl:container lg:mx-auto lg:w-[80%]">
        <div className="">
          <h1 className="text-3xl font-bold md:text-5xl">
            <span className="text-accent-teal">FAQs</span> (Frequently Asked
            Questions)
          </h1>
          <div className="pt-10">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f) => (
                <AccordionItem key={f.id} value={f.id}>
                  <AccordionTrigger>{f.title}</AccordionTrigger>
                  <AccordionContent>{f.content}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
