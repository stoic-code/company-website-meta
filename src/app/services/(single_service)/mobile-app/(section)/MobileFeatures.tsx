import React from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";

const data = [
  {
    icon: "/services/mobile/map.svg",
    title: "Geolocation Management",
    color: "bg-red-300",
  },
  {
    icon: "/services/mobile/payment.svg",
    title: "Payments",
    color: "bg-green-300",
  },
  {
    icon: "/services/mobile/message.svg",
    title: "Messaging & Video calling",
    color: "bg-blue-200",
  },
  {
    icon: "/services/mobile/updown.svg",
    title: "Multi-device Syncronizaton",
    color: "bg-green-200",
  },
  {
    icon: "/services/mobile/voice.svg",
    title: "Voice recognization & Recording",
    color: "bg-yellow-300",
  },
  {
    icon: "/services/mobile/bot.svg",
    title: "ChatBots",
    color: "bg-pink-300",
  },
  {
    icon: "/services/mobile/schedule.svg",
    title: "Scheduling & Booking",
    color: "bg-blue-200",
  },
  {
    icon: "/services/mobile/ui.svg",
    title: "UX Personalization",
    color: "bg-red-200",
  },
  {
    icon: "/services/mobile/qr.svg",
    title: "QR Scanning",
    color: "bg-teal-200",
  },
  {
    icon: "/services/mobile/bell.svg",
    title: "Push Notification",
    color: "bg-yellow-200",
  },
];

const MobileFeatures = () => {
  return (
    <div className="py-24">
      <h4 className="text-center text-3xl font-semibold text-primary md:text-5xl">
        Creating Every Smartphone Functionality That Today's Users Require
      </h4>
      <p className="pb-8 pt-4 text-center text-ui-600 md:mx-auto md:w-[90%]">
        Whether developing a mobile app for a business or a consumer, we depend
        on our knowledge of various technologies and tools to create apps that
        are genuinely beneficial and worthy of users' screen real estate. Even
        if we can duplicate the functionalities, no two applications are the
        same since we give each one a special value proposition and customize
        the functionality to meet the demands of its target user base.
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

export default MobileFeatures;
