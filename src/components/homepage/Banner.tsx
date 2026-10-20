import React from "react";
import Banner from "@/assets/banner.png";
import Image from "next/image";
import { Oswald } from "next/font/google";
import Link from "next/link";

const oswald = Oswald({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-oswald",
});

const BannerPage = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto flex flex-col items-center gap-10 md:flex-row md:justify-between bg-[#15171D] rounded-4xl p-10">
        <div className="space-y-4">
          <p className="text-[#C2F800] font-bold">WORKOUT LIBRARY</p>
          <h2
            className={`${oswald.className}font-oswald font-bold text-5xl text-white`}
          >
            TRAIN WITH INTENT.LOG <br /> EVERY SET.
          </h2>
          <p>
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into todays plan, and watch the weeks work add up.
          </p>
          <Link href={'/workout'}>
          <button className="btn btn-success border-none bg-[#C2F800] font-bold text-black">
            BROWSE WORKOUTS
          </button>
          </Link>
        </div>
        <div>
          <Image src={Banner} alt="Banner Image" />
        </div>
      </div>
    </section>
  );
};

export default BannerPage;
