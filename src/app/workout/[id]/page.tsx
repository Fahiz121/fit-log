import PlanButtonPage from "@/components/planandsavedbutton/PlanButton";
import SavedButton from "@/components/planandsavedbutton/SavedButton";
import { IWorkout } from "@/types/workout.type";
import Image from "next/image";

export const instant = false;

interface IWorkoutDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const getWorkOuts = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const workouts = await res.json();
  return workouts;
};

const WorkOutDetailPage = async ({ params }: IWorkoutDetailsPageProps) => {
  const { id } = await params;
  const workoutsData = await getWorkOuts();
  const workout = workoutsData.find(
    (workout: IWorkout) => String(workout.id) === String(id),
  ) as IWorkout;
  return (
    <section className="min-h-screen bg-[#0F1117] px-4 py-12 text-white md:py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-10 overflow-hidden rounded-3xl border border-white/10 bg-[#15171D] p-5 md:grid-cols-2 md:gap-12 md:p-10">
          {/* Workout Image */}
          <div>
            <Image
              src={workout.image}
              alt={workout.name}
              width={700}
              height={600}
              className="h-[300px] w-full rounded-2xl object-cover md:h-full md:max-h-[550px]"
            />
          </div>

          <div className="flex flex-col justify-center gap-6">
            <div>
              <h1 className="text-4xl font-bold uppercase tracking-wide md:text-5xl">
                {workout.name}
              </h1>

              <p className="mt-4 text-base leading-7 text-gray-400">
                {workout.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {workout.muscleGroups.map((muscle, index) => (
                <span
                  key={index}
                  className="rounded-full bg-[#C2F800] px-3 py-1 text-xs font-bold uppercase text-black"
                >
                  {muscle}
                </span>
              ))}
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#151922] px-5 py-3">
              <div className="space-y-2">
                {/* Equipment */}
                <div className="flex items-center justify-between gap-4">
                  <span className="flex items-center gap-2 font-bold text-[#9CA3AF]">
                    EQUIPMENT
                  </span>
                  <span className="text-right font-medium text-white">
                    {workout.equipment}
                  </span>
                </div>

                <hr className="h-px w-[calc(100%+2.5rem)] -ml-5 border-0 bg-white/10" />

                <div className="flex items-center justify-between gap-4">
                  <span className="text-[#9CA3AF] font-bold">DIFFICULTY</span>
                  <span className="rounded-full bg-[#C2F800]/10 px-3 py-1 text-sm font-medium text-[#C2F800]">
                    {workout.difficulty}
                  </span>
                </div>

                <hr className="h-px w-[calc(100%+2.5rem)] -ml-5 border-0 bg-white/10" />

                <div className="flex items-center justify-between gap-4">
                  <span className="text-[#9CA3AF] font-bold">SETS</span>
                  <span className="font-semibold text-white">
                    {workout.sets}
                  </span>
                </div>

                <hr className="h-px w-[calc(100%+2.5rem)] -ml-5 border-0 bg-white/10" />

                <div className="flex items-center justify-between gap-4">
                  <span className="text-[#9CA3AF] font-bold">REPS</span>
                  <span className="font-semibold text-white">
                    {workout.reps}
                  </span>
                </div>

                <hr className="h-px w-[calc(100%+2.5rem)] -ml-5 border-0 bg-white/10" />
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[#9CA3AF] font-bold">DURATION</span>
                  <span className="font-semibold text-white">
                    {workout.duration}
                  </span>
                </div>

                <hr className="h-px w-[calc(100%+2.5rem)] -ml-5 border-0 bg-white/10" />
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[#9CA3AF] font-bold">CALORIES</span>
                  <span className="font-semibold text-white">
                    {workout.caloriesBurned}
                  </span>
                </div>
                <hr className="h-px w-[calc(100%+2.5rem)] -ml-5 border-0 bg-white/10" />
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[#9CA3AF] font-bold">RATING</span>
                  <span className="font-semibold text-white">
                    {workout.rating}
                  </span>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h2 className="mb-4 text-xl font-bold">INSTRUCTIONS</h2>

              <ol className="space-y-3">
                {workout.instructions.map((instruction, index) => (
                  <li
                    key={index}
                    className="flex gap-3 text-sm leading-6 text-gray-400"
                  >
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#C2F800] font-bold text-black">
                      {index + 1}
                    </span>
                    <span>{instruction}</span>
                  </li>
                ))}
              </ol>
              <PlanButtonPage workout={workout}></PlanButtonPage>
              <SavedButton workout={workout}></SavedButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkOutDetailPage;
