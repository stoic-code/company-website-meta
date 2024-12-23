import { Metadata } from "next";
import Content from "./(section)/Content";
import Form from "./(section)/Form";

export const metadata: Metadata = {
  title: "Get in Touch with Metalogic: Contact Us for Expert Solutions",
  description:
    "Contact Metalogic to explore tailored solutions for your digital needs. Our team is ready to assist you with innovative web design, development, and digital strategies. Reach out now for a collaborative partnership that drives success.",
  keywords:
    "contact Metalogic, web design consultation, digital solutions, collaboration, expert assistance, get in touch, contact information",
  creator: "Metalogic - Your Gateway to Digital Excellence",
  category: "Contact Metalogic",
};

const page = () => {
  return (
    <section className="bg-get-started bg-cover bg-no-repeat text-ui-600">
      <div className="grid gap-y-6 pb-28 pt-28 2xl:container md:mx-auto md:grid-cols-2 lg:w-[90%]">
        <Content />
        <Form />
      </div>
    </section>
  );
};

export default page;
