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
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog", {cache:"force-cache"});
  const workouts = await res.json();
  return workouts;
};

export const instant = false;
const WorkoutPage = async () => {
  const workoutsData = await getWorkOuts();
  return (
    <section>
      <div>
        <Banner></Banner>
      </div>
      <div>
        <h2 id="library" className={`${oswald.className} scroll-mt-20 text-white text-[30px] font-bold ml-8`}>THE LIBRARY</h2>
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
