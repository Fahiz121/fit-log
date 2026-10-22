"use client";

import { WorkoutsContext } from "@/context/WorkoutsContext";
import { IWorkout } from "@/types/workout.type";
import { Oswald } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { FaClock, FaFire, FaStar } from "react-icons/fa";

interface IMyPlanCardProps {
  workout: IWorkout;
  listType: "plans" | "saved";
}

const oswald = Oswald({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-oswald",
});

const MyPlanCard = ({ workout, listType }: IMyPlanCardProps) => {
  const { setPlans, setSaved } = useContext(WorkoutsContext);

  const handleRemove = () => {
    if (listType === "plans") {
      setPlans((prev) => prev.filter((plan) => plan.id !== workout.id));
    } else {
      setSaved((prev) => prev.filter((item) => item.id !== workout.id));
    }
  };

  const handleMarkAsDone = () => {
    setPlans((prev) => prev.filter((plan) => plan.id !== workout.id));
  };

  return (
    <article className="group relative flex justify-center items-center gap-4 pb-2 rounded-xl border border-white/10 bg-[#14171E] p-3 transition-all duration-300 hover:border-[#C2F800]/30 sm:gap-5">
      <Link
        href={`/workout/${workout.id}`}
        className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg sm:h-28 sm:w-32"
      >
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          sizes="128px"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <span className="absolute bottom-1 left-1 rounded bg-black/75 px-1.5 py-0.5 text-[10px] font-bold text-[#C2F800]">
          ★ {workout.rating}
        </span>
      </Link>

      <div className="min-w-0 flex-1">
        <div className="mb-1 flex flex-wrap items-center gap-2">
          <h2
            className={`${oswald.className}truncate text-sm font-bold uppercase text-white sm:text-base`}
          >
            {workout.name}
          </h2>

          <span className="rounded-full bg-[#C2F800]/10 px-2 py-0.5 text-[10px] font-semibold text-[#C2F800]">
            {workout.difficulty}
          </span>
        </div>

        <p className="mb-2 line-clamp-1 text-xs text-gray-400">
          {workout.equipment}
        </p>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-300">
          <span className="inline-flex items-center gap-1">
            <FaClock className="text-gray-400" />
            {workout.duration} min
          </span>

          <span className="text-white/20">|</span>

          <span className="inline-flex items-center gap-1">
            <FaFire className="text-gray-400" />
            {workout.caloriesBurned} kcal
          </span>

          <span className="text-white/20">|</span>

          <span className="inline-flex items-center gap-1">
            <FaStar className="text-[#C2F800]" />
            {workout.rating}
          </span>
        </div>

        <div className="flex justify-center items-center gap-2 ml-200 -mt-10 ">
          <Link
            href={`../workout/${workout.id}`}
            className="rounded-lg border border-white/15 px-5 py-1.5 text-xs font-semibold text-white transition hover:border-[#C2F800] hover:text-[#C2F800]"
          >
            View Details ↗
          </Link>

          {listType === "plans" && (
            <button
              type="button"
              onClick={handleMarkAsDone}
              className="rounded-lg bg-[#C2F800] px-3 py-2 text-xs font-bold text-black transition hover:bg-[#d6ff38] active:scale-95"
            >
              ✓ Done
            </button>
          )}
        </div>
      </div>

      <button
        type="button"
        onClick={handleRemove}
        aria-label={`Remove ${workout.name} from ${listType}`}
        title={`Remove from ${listType}`}
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-gray-400 transition hover:border-red-500/40 hover:bg-red-500/10 hover:text-red-400"
      >
        <span className="text-xl leading-none">×</span>
      </button>
    </article>
  );
};

export default MyPlanCard;
