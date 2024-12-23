import React from "react";
import SingleCardsWithoutBorders from "./SingleCardsWithoutBorders";
import SingleCardWithBorder from "./SingleCardWithBorder";
import { FadeInStagger } from "../FadeIn";
import { TabletSmartphone, HeartHandshake, BookCopy } from "lucide-react";

const CardsLeft = () => {
  return (
    <FadeInStagger className="flex flex-col gap-8">
      <SingleCardsWithoutBorders
        backLink="/services/mobile-app"
        backDesc="Explore how our tailored solutions drive operational efficiency and leverage data insights for your business in the digital age."
        title={
          <>
            <>
              Mobile <br /> Development
            </>
          </>
        }
        icon={<TabletSmartphone size={56} />}
        desc="From streamlining operations to data-driven insights, we create solutions that empower your business to thrive in the digital age."
      />
      <SingleCardWithBorder
        backDesc="Discover how our branding strategies, logos, and visuals create a lasting impact, resonating effectively with your target audience."
        backLink="/services"
        title={
          <>
            Brand & <br /> Marketing
          </>
        }
        desc="Our branding experts craft strategies, logos, and visuals that resonate with your target audience, leaving a lasting impression."
        icon={<HeartHandshake size={56} />}
      />

      <SingleCardsWithoutBorders
        backLink="/services"
        backDesc="Explore our comprehensive training programs and workshops, spanning software utilization to design principles, elevating your team's skills and productivity."
        title={
          <>
            <>
              Internship/ <br /> Training
            </>
          </>
        }
        icon={<BookCopy size={56} />}
        desc="Our training programs and workshops cover a range of topics, from software utilization to design principles, enhancing your team's skills and productivity."
      />
    </FadeInStagger>
  );
};

export default CardsLeft;
