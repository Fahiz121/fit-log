"use client";
import MyPlanCard from "@/components/shared/MyPlanCard";
import { WorkoutsContext } from "@/context/WorkoutsContext";
import { IWorkout } from "@/types/workout.type";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { FaSort } from "react-icons/fa";

const MyPlanPage = () => {
  const { plans, saved } = useContext(WorkoutsContext);
  const [sortBy, setSortBy] = useState<"duration" | "calories" | "rating">(
    "duration",
  );
  const sortPlans = (workouts: IWorkout[]) => {
    const sortedPlans = [...workouts];
    if (sortBy === "duration") {
      sortedPlans.sort((a, b) => b.duration - a.duration);
    } else if (sortBy === "calories") {
      sortedPlans.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
    } else if (sortBy === "rating") {
      sortedPlans.sort((a, b) => b.rating - a.rating);
    }

    return sortedPlans;
  };

  const totalExercises = plans.length;

  const totalMinutes = plans.reduce(
    (total, workout) => total + workout.duration,
    0,
  );

  const totalCalories = plans.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0,
  );

  const sortedPlans = sortPlans(plans);
  const sortedSaved = sortPlans(saved);

  return (
    <div className="container mx-auto py-[20px]">
      <h2 className="my-4 rounded-3xl font-bold text-white text-4xl">
        MY PLAN
      </h2>
      <p className="text-[#8A92A0] pb-2">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      <div className="stats stats-vertical w-full borde bg-[#232732]/80 text-white shadow-lg backdrop-blur-xl lg:stats-horizontal">
        {/* Exercises */}
        <div className="stat">
          <div className="stat-title text-gray-400">Exercises</div>
          <div className="stat-value text-[#C2F800]">{totalExercises}</div>
        </div>

        {/* Minutes */}
        <div className="stat">
          <div className="stat-title text-gray-400">Minutes</div>
          <div className="stat-value text-white">{totalMinutes}</div>
        </div>

        {/* Calories */}
        <div className="stat">
          <div className="stat-title text-gray-400">Calories</div>
          <div className="stat-value text-white">
            {totalCalories.toLocaleString()}
          </div>
        </div>
      </div>

      <div className="flex justify-end items-center text-center p-2">
        <h2 className="text-[#8A92A0] pr-2 pb-3">
          <FaSort />
          Sort by
        </h2>
        <select
          value={sortBy}
          onChange={(e) =>
            setSortBy(e.target.value as "duration" | "calories" | "rating")
          }
          className="rounded-xl bg-[#13161D] text-white border-[#8A92A0] select select-text px-2 py-2 w-[100px]"
        >
          <option value={"duration"}>Duration</option>
          <option value={"calories"}>Calories</option>
          <option value={"rating"}>Rating</option>
        </select>
      </div>

      {/* name of each tab group should be unique */}
      <div className="tabs tabs-boxed">
        <input
          type="radio"
          name="my_tabs_6"
          className="tab h-8 min-h-8 rounded-lg border border-transparent bg-transparent px-3 text-xs font-semibold text-gray-400 transition-all duration-300 checked:border-[#1F242D] checked:bg-[#1F242D] checked:text-white"
          aria-label={`Today's Plan (${plans.length})`}
          defaultChecked
        />
        <div className="tab-content w-full space-y-[25px] border-base-300 p-4 text-white sm:p-6">
          {sortedPlans.length > 0 ? (
            sortedPlans.map((workout: IWorkout) => {
              return (
                <MyPlanCard
                  listType="plans"
                  key={workout.id}
                  workout={workout}
                />
              );
            })
          ) : (
            <div className="grid justify-items-center">
              <h2 className="text-center font-extrabold text-[30px] font-oswald">
                NOTHING HERE YET
              </h2>
              <p className="text-center text-[#A1A1AA] text-lg font-semibold">
                Browse the library and add a lift to get today moving.
              </p>
              <Link href={"../workout"}>
                <button className="btn btn-success w-[150px] border-none text-[#000000] rounded-4xl bg-[#C2F10D]">
                  Go to workouts
                </button>
              </Link>
            </div>
          )}
        </div>

        <input
          type="radio"
          name="my_tabs_6"
          className="tab h-8 min-h-8 rounded-lg border border-transparent bg-transparent px-3 text-xs font-semibold text-gray-400 transition-all duration-300 checked:border-[#1F242D] checked:bg-[#1F242D] checked:text-white"
          aria-label={`Saved (${saved.length})`}
        />
        <div className="tab-content w-full space-y-[25px] border-base-300 p-4 text-white sm:p-6">
          {sortedSaved.length > 0 ? (
            sortedSaved.map((workout: IWorkout) => {
              return (
                <MyPlanCard
                  listType="saved"
                  key={workout.id}
                  workout={workout}
                />
              );
            })
          ) : (
            <div className="grid justify-items-center">
              <h2 className="text-center text-white font-extrabold text-[30px] font-oswald">
                NOTHING HERE YET
              </h2>
              <p className="text-center text-[#A1A1AA] text-lg font-semibold">
                Browse the library and add a lift to get today moving.
              </p>
              <Link href={"../workout"}>
                <button className="btn btn-success w-[150px] border-none text-[#000000] rounded-4xl bg-[#C2F10D]">
                  Go to workouts
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyPlanPage;
