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
    <section className="px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
      <div className="container mx-auto flex max-w-7xl flex-col items-center gap-8 overflow-hidden rounded-3xl bg-[#15171D] p-5 sm:gap-10 sm:rounded-4xl sm:p-8 md:p-10 lg:flex-row lg:justify-between lg:gap-12">
        <div className="w-full min-w-0 space-y-4 text-center lg:w-1/2 lg:text-left">
          <p className="text-sm font-bold tracking-widest text-[#C2F800] sm:text-base">
            WORKOUT LIBRARY
          </p>

          <h2
            className={`${oswald.className} text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-5xl`}
          >
            TRAIN WITH INTENT.
            <br className="hidden sm:block" />
            LOG EVERY SET.
          </h2>

          <p className="mx-auto max-w-xl text-sm leading-6 text-[#9CA3AF] sm:text-base sm:leading-7 lg:mx-0">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the weeks&apos; work add up.
          </p>

          <div className="flex justify-center pt-2 lg:justify-start">
            <Link
              href="#library"
              className="btn min-h-12 w-full max-w-64 rounded-xl border-none bg-[#C2F800] px-6 font-bold text-black hover:bg-[#D5FF32] sm:w-auto"
            >
              BROWSE WORKOUTS
            </Link>
          </div>
        </div>

        <div className="w-full min-w-0 lg:w-1/2">
          <Image
            src={Banner}
            alt="FitLog workout library banner"
            priority
            sizes="(max-width: 639px) 100vw, (max-width: 1023px) 90vw, 50vw"
            className="h-auto max-h-[250px] w-full rounded-2xl object-contain sm:max-h-[350px] lg:max-h-[450px]"
          />
        </div>
      </div>
    </section>
  );
};

export default BannerPage;
