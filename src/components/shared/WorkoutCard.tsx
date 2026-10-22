import { IWorkout } from "@/types/workout.type";
import { Inter, Oswald } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { FaClock, FaFire, FaStar } from "react-icons/fa";

interface IWorkOutCardProps {
  workout: IWorkout;
}

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const WorkoutCard = ({ workout }: IWorkOutCardProps) => {
  return (
    <Link
      href={`/workout/${workout.id}`}
      className="group block h-full w-full min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-[#15171D] text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#C2F800]/30 hover:shadow-xl"
    >
      <figure className="relative overflow-hidden bg-[#20242E]">
        <Image
          className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-56 lg:h-60 xl:h-64"
          src={workout.image}
          alt={workout.name}
          width={500}
          height={300}
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
        />
      </figure>

      <div className="flex h-full flex-col bg-[#20242E] p-4 sm:p-5">
        <div className="mb-3 flex flex-wrap gap-2">
          {workout.muscleGroups.map((muscle, index) => (
            <span
              key={`${muscle}-${index}`}
              className="rounded-full bg-[#C2F800] px-2.5 py-1 text-[10px] font-bold uppercase text-black sm:px-3 sm:text-xs"
            >
              {muscle}
            </span>
          ))}
        </div>

        <h2
          className={`${oswald.className} line-clamp-2 text-lg font-semibold uppercase leading-snug text-white transition-colors group-hover:text-[#C2F800] sm:text-xl`}
        >
          {workout.name}
        </h2>

        <p
          className={`${inter.className} mt-2 line-clamp-1 text-xs font-normal text-[#9CA3AF] sm:text-sm`}
        >
          {workout.equipment}
        </p>

        <hr className="my-4 border-white/10" />

        <div className="mt-auto grid grid-cols-3 gap-2 text-xs text-gray-400 sm:gap-3 sm:text-sm">
          <p className="flex min-w-0 items-center gap-1.5">
            <FaClock className="shrink-0 text-[#C2F800]" />
            <span className="truncate">{workout.duration} min</span>
          </p>

          <p className="flex min-w-0 items-center gap-1.5">
            <FaFire className="shrink-0 text-[#C2F800]" />
            <span className="truncate">{workout.caloriesBurned} kcal</span>
          </p>

          <p className="flex min-w-0 items-center gap-1.5">
            <FaStar className="shrink-0 text-[#C2F800]" />
            <span>{workout.rating}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;
