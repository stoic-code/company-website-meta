import React from "react";
import SingleCardWithBorder from "./SingleCardWithBorder";
import { FadeInStagger } from "../FadeIn";
import { MonitorSmartphone, Globe } from "lucide-react";

const CardsRight = () => {
  return (
    <FadeInStagger className="flex flex-col gap-8">
      <SingleCardWithBorder
        backLink="/services/ui-ux"
        backDesc="Discover how we design interfaces that blend visual appeal with intuitiveness, driving conversions and enhancing user experience seamlessly."
        icon={<MonitorSmartphone size={56} />}
        title={<>UI/UX</>}
        desc="we create interfaces that are not just visually appealing, but also intuitive and conversion-focused."
      />

      <SingleCardWithBorder
        backLink="/services/web-development"
        backDesc="Witness the synergy of our creative designers and skilled developers, crafting stunning websites that captivate visitors and foster customer loyalty."
        icon={<Globe size={56} />}
        title={
          <>
            Web <br /> Development
          </>
        }
        desc="Our creative designers and skilled developers collaborate to create stunning websites that engage visitors and convert them into loyal customers."
      />
    </FadeInStagger>
  );
};

export default CardsRight;
