import Banner from "@/components/homepage/Banner";
import WorkoutCard from "@/components/shared/WorkoutCard";
import { IWorkout } from "@/types/workout.type";
import { Inter, Oswald } from "next/font/google";
import React from "react";

const oswald = Oswald({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-oswald",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const getWorkOuts = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const workouts = await res.json();
  return workouts;
};
console.log(getWorkOuts);

export const instant = false;
const WorkoutPage = async () => {
  const workoutsData = await getWorkOuts();
  console.log(workoutsData);
  return (
    <section>
      <div>
        <Banner></Banner>
      </div>
      <div>
        <h2 className={`${oswald.className} text-white text-[30px] font-bold ml-8`}>THE LIBRARY</h2>
        <p className={`${inter.className} text-[#9CA3AF] mb-2 ml-8`}>Twelve lifts covering every major muscle group.</p>
      </div>
      <div className="grid grid-cols-3 gap-5 ml-9 mr-9">
        {workoutsData.map((workout: IWorkout) => {
          return <WorkoutCard key={workout.id} workout={workout}></WorkoutCard>;
        })}
      </div>
    </section>
  );
};

export default WorkoutPage;
