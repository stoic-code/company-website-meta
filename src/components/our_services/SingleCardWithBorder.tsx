import React from "react";
import styles from "./SingleCard.module.css";
import Link from "next/link";

const SingleCardWithBorder = ({
  title,
  desc,
  icon,
  backDesc,
  backLink,
}: {
  title: React.ReactNode;
  desc: string;
  icon: React.ReactNode;
  backDesc: React.ReactNode;
  backLink: string;
}) => {
  return (
    <div className={`${styles.wrapper} w-52`}>
      <div className={`${styles.card} relative rounded-xl`}>
        <div
          className={`${styles.front} w-fit rounded-xl border border-secondary-600`}
        >
          <div className="flex flex-col items-center justify-center gap-4 rounded-xl py-4 text-center">
            <div className="rounded-full bg-secondary-800 p-8 text-white">
              {icon}
            </div>
            <div className="px-2 ">
              <h2 className="pb-4 text-xl font-semibold">{title}</h2>
              <p className="px-4 text-sm">{desc}</p>
            </div>
          </div>
        </div>

        <div
          className={`${styles.back} absolute top-0 flex h-full flex-col items-center justify-center gap-4 rounded-xl bg-gradient-to-r from-secondary-600 to-secondary-300 text-center  text-white`}
        >
          <p className="p-2">{backDesc}</p>
          <Link
            href={backLink}
            className="text-blue-200 underline underline-offset-4"
          >
            See More
            <span className="sr-only">{backDesc}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleCardWithBorder;
