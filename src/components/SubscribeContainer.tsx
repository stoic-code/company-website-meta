"use client";
import React from "react";
import { Input } from "./ui/input";
import { Loader2, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import {
  subscribeFormSchema,
  TSubscribeForm,
} from "@/schemas/subscribe.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "./ui/use-toast";

const SubscribeContainer = () => {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TSubscribeForm>({
    resolver: zodResolver(subscribeFormSchema),
  });

  const onSubmit = async (data: TSubscribeForm) => {
    console.log(data);
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("hello");
      }, 1000);
    });

    toast({
      title: "Welcome to Our Community!",
      description:
        "Thank you for subscribing to our newsletter. Get ready for exclusive updates, offers, and more! 🎉",
    });
  };

  return (
    <div className="bg-ui-200  py-20 text-center text-ui-500">
      <h4 className="text-xl font-semibold text-ui-700">
        Subscribe to our News Letters
      </h4>
      <p className="py-4 text-ui-500 md:mx-auto md:w-[70%]">
        Stay informed, inspired, and equipped with the latest trends and
        breakthroughs in your field.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 px-4 py-3 sm:flex-row md:mx-auto md:w-[50%]"
      >
        <div className="flex-1">
          <Input
            {...register("email")}
            placeholder="Please Enter Your Email"
            className="bg-white py-6"
          />
          <p className="px-2 text-left text-red-500">
            {errors ? errors.email?.message : ""}
          </p>
        </div>
        <button
          disabled={isSubmitting}
          className="flex h-fit items-center justify-center gap-2 rounded-lg bg-secondary-300 px-4 py-3 text-white "
        >
          {isSubmitting ? (
            <Loader2 className="animate-spin" size={20} />
          ) : (
            <Mail size={20} />
          )}
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default SubscribeContainer;
