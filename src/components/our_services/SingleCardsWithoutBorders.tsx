import React from "react";
import styles from "./SingleCard.module.css";
import Link from "next/link";

const SingleCardsWithoutBorders = ({
  icon,
  desc,
  title,
  backDesc,
  backLink,
}: {
  icon: React.ReactNode;
  desc: string;
  title: React.ReactNode;
  backDesc: React.ReactNode;
  backLink: string;
}) => {
  return (
    <div className={`${styles.wrapper} w-52`}>
      <div className={`${styles.card} relative w-52 rounded-xl`}>
        <div
          className={`${styles.front} rounded-xl bg-gradient-to-r from-[#FF5d5d] to-[#DD2476] `}
        >
          <div className="flex flex-col items-center justify-center gap-4 rounded-xl py-4 text-center">
            <div className="rounded-full bg-[#ff5d5d] p-8 text-white">
              {icon}
            </div>
            <div className="px-2 text-white">
              <h2 className="pb-4 text-xl font-semibold">{title}</h2>
              <p className="px-4 text-sm">{desc}</p>
            </div>
          </div>
        </div>

        <div
          className={`${styles.back} absolute top-0 flex h-full w-52 flex-col items-center justify-center gap-4 rounded-lg border border-secondary-600 text-center`}
        >
          <p className="p-2 text-ui-600">{backDesc}</p>
          <Link
            href={backLink}
            className="text-blue-700 underline underline-offset-4"
          >
            See More
            <span className="sr-only">{backDesc}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleCardsWithoutBorders;
