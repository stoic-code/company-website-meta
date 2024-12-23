import React from "react";
import { FadeIn } from "@/components/FadeIn";
import { HeadphonesIcon, HeartHandshake } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";

const Content = () => {
  return (
    <FadeIn className="flex flex-col justify-center gap-9 px-4 md:px-10 xl:px-20">
      <div className="font-semibold uppercase text-reddish-1 ">
        Get In Touch
      </div>

      <div className="text-3xl font-bold capitalize text-blue-950 md:text-5xl">
        Let's Kickstart Your Project
      </div>

      <div className="text-md">
        Ready to take the next step? Fill out the form to schedule a
        consultation with our experts.
      </div>

      <div className="flex w-fit flex-col gap-6 rounded-xl bg-white p-4">
        <div className="flex items-center gap-4">
          <div className="rounded-2xl bg-blue-300 p-2">
            <HeadphonesIcon />
          </div>
          <div>
            <h4 className="font-semibold md:text-xl">Customer Support</h4>
            <p className="text-sm">
              Need a technical Assistance ?{" "}
              <Link
                href="#"
                className="text-blue-800 underline underline-offset-2"
              >
                Contact Support
              </Link>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="rounded-2xl bg-blue-300 p-2">
            <HeartHandshake />
          </div>
          <div>
            <h4 className="font-semibold md:text-xl">Partnerships</h4>
            <p className="text-sm">
              Want to offer MetaLogic to your client? <br />
              Become a{" "}
              <Link
                href="/contact/partner"
                className="text-blue-800 underline underline-offset-2"
              >
                Partner
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="h-[1px] bg-ui-400" />

      <div>
        <p>Or You can directly send a message in whatsapp</p>
        <Button asChild className="mt-4 flex gap-2 font-semibold" size="lg">
          <Link href="https://wa.me/9851353599" target="_blank">
            Whatsapp
            <FaWhatsapp size={20} />
          </Link>
        </Button>
      </div>
    </FadeIn>
  );
};

export default Content;
