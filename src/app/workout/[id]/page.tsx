import { IWorkout } from "@/types/workout.type";
import Image from "next/image";
import { FaClock, FaDumbbell, FaFire, FaStar } from "react-icons/fa";

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
  const {id} = await params;
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

          {/* Workout Details */}
          <div className="flex flex-col justify-center gap-6">
            <div className="flex flex-wrap gap-2">
              {workout.muscleGroups.map((muscle,index) => (
                <span
                  key={index}
                  className="rounded-full bg-[#C2F800] px-3 py-1 text-xs font-bold uppercase text-black"
                >
                  {muscle}
                </span>
              ))}
            </div>

            <div>
              <h1 className="text-4xl font-bold uppercase tracking-wide md:text-5xl">
                {workout.name}
              </h1>

              <p className="mt-4 text-base leading-7 text-gray-400">
                {workout.description}
              </p>
            </div>

            {/* Workout Stats */}
            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-xl bg-[#20232B] p-4">
                <FaClock className="mb-3 text-xl text-[#C2F800]" />
                <p className="text-xl font-bold">{workout.duration} min</p>
                <p className="mt-1 text-xs text-gray-400">Duration</p>
              </div>

              <div className="rounded-xl bg-[#20232B] p-4">
                <FaFire className="mb-3 text-xl text-orange-500" />
                <p className="text-xl font-bold">{workout.caloriesBurned}</p>
                <p className="mt-1 text-xs text-gray-400">Calories</p>
              </div>

              <div className="rounded-xl bg-[#20232B] p-4">
                <FaStar className="mb-3 text-xl text-yellow-400" />
                <p className="text-xl font-bold">{workout.rating}</p>
                <p className="mt-1 text-xs text-gray-400">Rating</p>
              </div>
            </div>

            {/* Workout Information */}
            <div className="space-y-4 border-t border-white/10 pt-6">
              <div className="flex items-center justify-between gap-4">
                <span className="flex items-center gap-2 text-gray-400">
                  <FaDumbbell className="text-[#C2F800]" />
                  Equipment
                </span>
                <span className="text-right font-medium">
                  {workout.equipment}
                </span>
              </div>

              <div className="flex items-center justify-between gap-4">
                <span className="text-gray-400">Difficulty</span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-sm">
                  {workout.difficulty}
                </span>
              </div>

              <div className="flex items-center justify-between gap-4">
                <span className="text-gray-400">Sets</span>
                <span className="font-semibold">{workout.sets}</span>
              </div>

              <div className="flex items-center justify-between gap-4">
                <span className="text-gray-400">Reps</span>
                <span className="font-semibold">{workout.reps}</span>
              </div>
            </div>

            {/* Instructions */}
            <div className="border-t border-white/10 pt-6">
              <h2 className="mb-4 text-xl font-bold">HOW TO PERFORM</h2>

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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkOutDetailPage;
