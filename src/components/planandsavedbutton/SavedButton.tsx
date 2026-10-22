"use client";
import { WorkoutsContext } from "@/context/WorkoutsContext";
import { IWorkout } from "@/types/workout.type";
import { useContext } from "react";
import { FaSave } from "react-icons/fa";
import { toast } from "react-toastify";

const SavedButtonPage = ({ workout }: { workout: IWorkout }) => {
  const { saved, setSaved } = useContext(WorkoutsContext);
  const handleAddtoSaved = () => {
    setSaved((prev) =>
      prev.some((item) => item.id === workout.id) ? prev : [...prev, workout],
    );
    toast.success(`you saved the plan ${workout.name}`);
  };

  const isSaved = saved.some((item) => item.id === workout.id);
  return (
    <button
      className="btn mt-3 min-h-12 w-full gap-2 rounded-xl border border-white/20 bg-black px-5 text-sm font-bold text-white transition-colors duration-300 hover:border-[#CCFF00] hover:bg-[#1A1D24] disabled:cursor-not-allowed disabled:border-[#353B48] disabled:bg-[#232732] disabled:text-[#9CA3AF] sm:ml-2 sm:mt-8 sm:w-auto sm:min-w-52 sm:text-base"
      disabled={isSaved}
      onClick={handleAddtoSaved}
    >
      <FaSave className="shrink-0 text-lg sm:text-xl" />
      <span>{isSaved ? "Already Saved" : "Save for later"}</span>
    </button>
  );
};

export default SavedButtonPage;
