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
    <section className="min-h-screen overflow-x-hidden bg-[#0F1117] px-4 py-8 text-white sm:px-6 sm:py-12 lg:px-8 lg:py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-6 overflow-hidden rounded-2xl border border-white/10 bg-[#15171D] p-4 sm:gap-8 sm:rounded-3xl sm:p-6 md:gap-10 md:p-8 lg:grid-cols-2 lg:gap-12 lg:p-10">
          <div className="min-w-0">
            <Image
              src={workout.image}
              alt={workout.name}
              width={700}
              height={600}
              priority
              className="h-56 w-full rounded-xl object-cover sm:h-80 md:rounded-2xl lg:sticky lg:top-8 lg:h-[550px]"
            />
          </div>

          <div className="flex min-w-0 flex-col justify-center gap-5 sm:gap-6">
            <div>
              <h1 className="break-words text-3xl font-bold uppercase tracking-wide sm:text-4xl lg:text-5xl">
                {workout.name}
              </h1>

              <p className="mt-3 text-sm leading-6 text-gray-400 sm:mt-4 sm:text-base sm:leading-7">
                {workout.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {workout.muscleGroups.map((muscle, index) => (
                <span
                  key={`${muscle}-${index}`}
                  className="rounded-full bg-[#C2F800] px-3 py-1.5 text-[10px] font-bold uppercase text-black sm:text-xs"
                >
                  {muscle}
                </span>
              ))}
            </div>

            <div className="min-w-0 rounded-xl border border-white/10 bg-[#151922] px-4 py-4 sm:rounded-2xl sm:px-5">
              <div className="space-y-0">
                <div className="flex items-start justify-between gap-3 py-3 first:pt-0">
                  <span className="shrink-0 text-xs font-bold text-[#9CA3AF] sm:text-sm">
                    EQUIPMENT
                  </span>
                  <span className="min-w-0 text-right text-sm font-medium text-white [overflow-wrap:anywhere]">
                    {workout.equipment}
                  </span>
                </div>

                <hr className="border-white/10" />

                <div className="flex items-center justify-between gap-3 py-3">
                  <span className="text-xs font-bold text-[#9CA3AF] sm:text-sm">
                    DIFFICULTY
                  </span>
                  <span className="rounded-full bg-[#C2F800]/10 px-3 py-1 text-xs font-medium text-[#C2F800] sm:text-sm">
                    {workout.difficulty}
                  </span>
                </div>

                <hr className="border-white/10" />

                <div className="flex items-center justify-between gap-3 py-3">
                  <span className="text-xs font-bold text-[#9CA3AF] sm:text-sm">
                    SETS
                  </span>
                  <span className="text-sm font-semibold text-white">
                    {workout.sets}
                  </span>
                </div>

                <hr className="border-white/10" />

                <div className="flex items-center justify-between gap-3 py-3">
                  <span className="text-xs font-bold text-[#9CA3AF] sm:text-sm">
                    REPS
                  </span>
                  <span className="text-right text-sm font-semibold text-white">
                    {workout.reps}
                  </span>
                </div>

                <hr className="border-white/10" />

                <div className="flex items-center justify-between gap-3 py-3">
                  <span className="text-xs font-bold text-[#9CA3AF] sm:text-sm">
                    DURATION
                  </span>
                  <span className="text-sm font-semibold text-white">
                    {workout.duration}
                  </span>
                </div>

                <hr className="border-white/10" />

                <div className="flex items-center justify-between gap-3 py-3">
                  <span className="text-xs font-bold text-[#9CA3AF] sm:text-sm">
                    CALORIES
                  </span>
                  <span className="text-sm font-semibold text-white">
                    {workout.caloriesBurned}
                  </span>
                </div>

                <hr className="border-white/10" />

                <div className="flex items-center justify-between gap-3 py-3 last:pb-0">
                  <span className="text-xs font-bold text-[#9CA3AF] sm:text-sm">
                    RATING
                  </span>
                  <span className="text-sm font-semibold text-white">
                    {workout.rating}
                  </span>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-5 sm:pt-6">
              <h2 className="mb-4 text-lg font-bold sm:text-xl">
                INSTRUCTIONS
              </h2>

              <ol className="space-y-4">
                {workout.instructions.map((instruction, index) => (
                  <li
                    key={`${index}-${instruction}`}
                    className="flex min-w-0 items-start gap-3 text-sm leading-6 text-gray-400 sm:gap-4 sm:text-base"
                  >
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#C2F800] text-xs font-bold text-black sm:size-8 sm:text-sm">
                      {index + 1}
                    </span>
                    <span className="min-w-0 flex-1 [overflow-wrap:anywhere]">
                      {instruction}
                    </span>
                  </li>
                ))}
              </ol>

              <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
                <div className="w-full min-w-0 sm:w-auto">
                  <PlanButtonPage workout={workout} />
                </div>

                <div className="w-full min-w-0 sm:w-auto">
                  <SavedButton workout={workout} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkOutDetailPage;
