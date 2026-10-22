"use client";
import { WorkoutsContext } from "@/context/WorkoutsContext";
import { IWorkout } from "@/types/workout.type";
import { useContext } from "react";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { toast } from "react-toastify";

const PlanButtonPage = ({ workout }: { workout: IWorkout }) => {
  const { plans, setPlans } = useContext(WorkoutsContext);
  const handlePlans = () => {
    setPlans((prev) =>
      prev.some((item) => item.id === workout.id) ? prev : [...prev, workout],
    );
    toast.success(`you have plan ${workout.name}`);
  };

  const isPlaned = plans.some((item) => item.id === workout.id);
  return (
    <button
      className="btn mt-6 min-h-12 w-full gap-2 rounded-xl border-none bg-[#CCFF00] px-5 text-sm font-bold text-[#0F1115] transition-colors duration-300 hover:bg-[#D9FF4D] disabled:cursor-not-allowed disabled:bg-[#353B48] disabled:text-[#9CA3AF] sm:mt-8 sm:w-auto sm:min-w-52 sm:text-base"
      onClick={handlePlans}
      disabled={isPlaned}
    >
      <MdOutlineLibraryAdd className="shrink-0 text-lg sm:text-xl" />
      <span>{isPlaned ? "Already Added" : "Add to today's plan"}</span>
    </button>
  );
};

export default PlanButtonPage;
