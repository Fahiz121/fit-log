import { IWorkout } from "@/types/workout.type";
import { Inter, Oswald } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";
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
      className="card w-full bg-[#15171D] text-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="card shadow-sm bg-[#20242E]">
        <figure>
          <Image
            className="h-[250px] w-full rounded-xl object-cover"
            src={workout.image}
            alt={workout.name}
            width={500}
            height={250}
          ></Image>
        </figure>
        <div className="card-body">
          <div className="card-actions justify-end mr-auto">
            <div className="flex flex-wrap gap-2">
              {workout.muscleGroups.map((muscle, index) => (
                <span
                  key={index}
                  className="rounded-full uppercase bg-[#C2F800] px-3 py-1 text-sm font-medium text-black"
                >
                  {muscle}
                </span>
              ))}
            </div>
          </div>
          <h2
            className={`${oswald.className}card-title text-white text-[18px] text-lg uppercase font-semibold font-oswald`}
          >
            {workout.name}
          </h2>
          <p
            className={`text-[#9CA3AF] ${inter.className} text-[12px] font-normal`}
          >
            {workout.equipment}
          </p>
          <hr />
          <div className="grid grid-cols-3 m-auto ml-1 gap-1 text-sm text-gray-400">
            <p className="flex items-center">
              <FaClock className="text-gray-400" />
              {workout.duration}min
            </p>

            <p className="flex items-center">
              <FaFire className="text-gray-400" />
              {workout.caloriesBurned}kcal
            </p>

            <p className="flex items-center">
              <FaStar className="text-gray-400" />
              {workout.rating}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;
