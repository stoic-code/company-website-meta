import React from "react";
import Image from "next/image";

const data = [
  "Apps available on all iOS, watchOS, Android, and Wear OS platforms",
  "Apps that are native and cross-platform (Xamarin, Flutter, React Native)",
  "Business applications (for internal usage) and paid goods",
  "Solutions utilizing both mobile apps and web apps (including PWAs*)",
];

const AllPlatform = () => {
  return (
    <div className="2xl:container">
      <h3 className="py-16 text-center text-3xl font-semibold text-ui-600">
        We offer mobile devices <br /> applications for every platform, every
        device, and every audience, such as:
      </h3>
      <div className="flex flex-wrap justify-center gap-8">
        {data.map((d, idx) => (
          <div
            key={idx}
            className="flex w-[200px] flex-col items-center gap-4 rounded-xl bg-neutral-100 p-4 text-center text-ui-600 shadow-lg"
          >
            <Image src="/services/star.svg" alt="star" height={50} width={50} />
            <p>{d}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllPlatform;
