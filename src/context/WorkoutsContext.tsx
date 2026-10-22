'use client'
import { IWorkout } from "@/types/workout.type";
import React, { createContext, ReactNode, useState } from "react";

interface IWorkoutsContext {
  plans: IWorkout[];
  setPlans: React.Dispatch<React.SetStateAction<IWorkout[]>>;
  saved: IWorkout[];
  setSaved: React.Dispatch<React.SetStateAction<IWorkout[]>>;
}

export const WorkoutsContext = createContext<IWorkoutsContext>({
  plans: [],
  setPlans: () => {},
  saved: [],
  setSaved: () => {},
});


const WorkoutsProvider = ({children}: {children:ReactNode}) => {
    const [plans,setPlans] = useState<IWorkout[]>([])
    const [saved, setSaved] = useState<IWorkout[]>([])
    const sharedData = {
        plans,
        setPlans,
        saved,
        setSaved
    }

    return <WorkoutsContext.Provider value={sharedData}>{children}</WorkoutsContext.Provider>
}

export default WorkoutsProvider;
