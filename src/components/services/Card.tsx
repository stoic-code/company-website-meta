import React from "react";
import { Card } from "../ui/card";

const ServiceCard = () => {
  return (
    <Card className="flex w-[300px] flex-col items-center justify-center gap-2 p-4 text-center">
      <div className="rounded-full bg-gray-200">
        <img
          className="h-24 w-24 rounded-full object-cover object-left"
          src="https://imageio.forbes.com/specials-images/imageserve/609946db7c398a0de6c94893/Mid-Adult-Female-Entrepreneur-With-Arms-Crossed-/960x0.jpg?height=473&width=711&fit=bounds"
        />
      </div>
      <h2 className="font-semibold text-blue-950">People Name</h2>
      <p className="text-sm">
        Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
        enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
      </p>
    </Card>
  );
};

export default ServiceCard;
