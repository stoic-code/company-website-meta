import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FadeIn } from "@/components/FadeIn";

import Banshwali from "./Banshwali";
import DigitalKhata from "./DigitalKhata";

const OurProducts = () => {
  return (
    <div className="relative w-full bg-products-bg bg-left-bottom bg-no-repeat">
      <div className="container py-20">
        <div className="flex flex-col items-center justify-center">
          <div className="lg:mx-auto lg:w-[80%]">
            <FadeIn>
              <h2 className="z-50 pb-12 text-4xl font-bold md:w-[50%] md:pb-24 md:text-5xl">
                Explore Our Products
              </h2>
            </FadeIn>
            <div className="w-full md:mx-auto md:w-full">
              <Tabs defaultValue="banshwali">
                <TabsList className="grid grid-cols-2 md:w-[50%] lg:w-[30%]">
                  <TabsTrigger
                    value="banshwali"
                    className="transition-width transition hover:bg-ui-200"
                  >
                    Banshwali
                  </TabsTrigger>
                  <TabsTrigger
                    value="digital_khata"
                    className="transition-width"
                  >
                    Digital Khata
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="banshwali">
                  <Banshwali />
                </TabsContent>
                <TabsContent value="digital_khata">
                  <DigitalKhata />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
