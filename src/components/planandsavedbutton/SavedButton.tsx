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

  const isSaved = saved.some((item) => item.id === workout.id)
  return (
    <button
      className="btn bg-black border rounded-xl text-white ml-2 mt-8"
      disabled={isSaved}
      onClick={handleAddtoSaved}
    >
      <FaSave></FaSave>
      {isSaved ? "Already Saved" : "Save for later"}
    </button>
  );
};

export default SavedButtonPage;
