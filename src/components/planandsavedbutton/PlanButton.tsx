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
      prev.some((item)=> item.id === workout.id)
       ? prev
       : [...prev, workout]
    );
    toast.success(`you have plan ${workout.name}`);
  };

  const isPlaned = plans.some((item) => item.id === workout.id);
  return (
    <button
      className="btn mt-8 rounded-xl font-bold bg-[#CCFF00] text-[#0F1115]"
      onClick={handlePlans}
      disabled={isPlaned}
    >
      <MdOutlineLibraryAdd />
      {isPlaned ? "Already Added" : "Add to today's plan"}
    </button>
  );
};

export default PlanButtonPage;
