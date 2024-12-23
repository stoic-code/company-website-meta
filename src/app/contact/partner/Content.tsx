import React from "react";
import { FadeIn } from "@/components/FadeIn";
import Link from "next/link";

const data = [
  {
    title: "Earn Commission",
    desc: "Get paid for every project you bring to MetaLogic",
    icon: "/partner/commission.svg",
  },
  {
    title: "Access Top Solutions",
    desc: "Offer clients cutting-edge technology solutions",
    icon: "/partner/solution.svg",
  },
  {
    title: "Expand your services",
    desc: "Enhance your offerings with MetaLogic's solutions",
    icon: "/partner/expand.svg",
  },
  {
    title: "Receive Support",
    desc: "Get training and assistance for success.",
    icon: "/partner/support.svg",
  },
  {
    title: "Marketing Collaboration",
    desc: "Partner on marketing efforts to reach more clients.",
    icon: "/partner/collaboration.svg",
  },
  {
    title: "Boost Reputation",
    desc: "Gain credibility by partnering with a reputable tech firm.",
    icon: "/partner/reputation.svg",
  },
  {
    title: "Grow Your Business",
    desc: "Unlock new revenue streams and expand your client base.",
    icon: "/partner/grow.svg",
  },
  {
    title: "Connect with Experts",
    desc: "Join a network of industry professionals for collaboration.",
    icon: "/partner/professional.svg",
  },
];

const Content = () => {
  return (
    <FadeIn className="flex flex-col gap-4">
      <div className="flex justify-between font-semibold uppercase text-reddish-1">
        Partnership{" "}
        <Link
          className="text-sm font-normal capitalize text-blue-600 underline underline-offset-2 md:hidden"
          href="#form"
        >
          Fill Form
        </Link>
      </div>

      <div className="text-3xl font-bold capitalize text-blue-950 md:text-5xl">
        Become a Partner with MetaLogic
      </div>

      <div className="pt-3 text-xl text-ui-600">
        Benefits of partnering with us.
      </div>

      <ul className="flex flex-wrap gap-5 rounded-xl">
        {data.map((d, idx) => (
          <li
            key={idx}
            className="w-[120px] rounded-xl bg-yellow-50 p-3 shadow"
          >
            <img src={d.icon} className="w-12" />
            <span className="text-sm font-bold text-ui-600">{d.title}</span>
          </li>
        ))}
      </ul>

      {/* 
      <div className="h-[1px] bg-ui-400" />
      <div>
        <p>Or You can directly send a message in whatsapp</p>
        <Button asChild className="mt-4 flex gap-2 font-semibold" size="lg">
          <Link href="https://wa.me/9851353599" target="_blank">
            Whatsapp
            <FaWhatsapp size={20} />
          </Link>
        </Button>
      </div> */}
    </FadeIn>
  );
};

export default Content;
