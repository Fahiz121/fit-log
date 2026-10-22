import Banner from "@/components/homepage/Banner";
import WorkoutCard from "@/components/shared/WorkoutCard";
import { IWorkout } from "@/types/workout.type";
import { Inter, Oswald } from "next/font/google";

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
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog", {
    cache: "force-cache",
  });
  const workouts = await res.json();
  return workouts;
};

export const instant = false;
const WorkoutPage = async () => {
  const workoutsData = await getWorkOuts();
  return (
    <section className="min-h-screen overflow-x-hidden bg-[#0F1117] pb-12 sm:pb-16">
      <div className="w-full">
        <Banner />
      </div>

      <div className="mx-4 mb-5 mt-8 sm:mx-6 sm:mt-10 lg:mx-9">
        <h2
          id="library"
          className={`${oswald.className} scroll-mt-20 text-2xl font-bold text-white sm:text-3xl`}
        >
          THE LIBRARY
        </h2>

        <p
          className={`${inter.className} mt-2 text-sm leading-6 text-[#9CA3AF] sm:text-base`}
        >
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      <div className="mx-4 grid grid-cols-1 gap-5 sm:mx-6 sm:grid-cols-2 lg:mx-9 lg:grid-cols-3 lg:gap-6">
        {workoutsData.map((workout: IWorkout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
    </section>
  );
};

export default WorkoutPage;
