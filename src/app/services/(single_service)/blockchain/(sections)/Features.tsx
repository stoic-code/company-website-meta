import React from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";

const data = [
  {
    icon: "/services/blockchain/payment.svg",
    title: "Financial Transactions",
    color: "bg-green-300",
  },
  {
    icon: "/services/blockchain/heart.svg",
    title: "Health Record Management",
    color: "bg-red-300",
  },
  {
    icon: "/services/blockchain/truck.svg",
    title: "Supplychain Management",
    color: "bg-blue-200",
  },
  {
    icon: "/services/blockchain/asset.svg",
    title: "Asset Management",
    color: "bg-green-200",
  },
  {
    icon: "/services/blockchain/key.svg",
    title: "Identity and Access Management",
    color: "bg-yellow-300",
  },
  {
    icon: "/services/blockchain/document.svg",
    title: "Document Management",
    color: "bg-pink-300",
  },
  {
    icon: "/services/blockchain/cart.svg",
    title: "MarketPlace Management",
    color: "bg-blue-200",
  },
  {
    icon: "/services/blockchain/vote.svg",
    title: "Electronic Voting",
    color: "bg-red-200",
  },
];

const Features = () => {
  return (
    <div className="py-24">
      <h4 className="text-center text-3xl font-semibold text-primary md:text-5xl">
        Building All blockchain Features Modern Users Need
      </h4>
      <p className="pb-8 pt-4 text-center text-ui-600 md:mx-auto md:w-[90%]">
        Whether creating an enterprise or consumer blockchain app, we rely on
        our expertise in different techs and tools to make an app truly helpful
        and worth taking your users’ screen space. Though we can repeat the
        features, no two apps are identical: we find a unique value proposition
        for each app and tailor the functionality uniquely to its audience’s
        needs.
      </p>
      <div className="flex flex-wrap justify-center gap-8 py-10">
        {data.map((d, idx) => (
          <Card key={idx} className="w-[200px] p-4">
            <div className={`${d.color} w-[30%] rounded-xl p-2`}>
              <Image src={d.icon} alt={d.title} width={100} height={100} />
            </div>
            <p className="py-4 font-semibold">{d.title}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Features;
