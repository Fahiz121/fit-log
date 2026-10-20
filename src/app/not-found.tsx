import { ArrowLeft, Dumbbell } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6 py-12 text-white">
      <div className="w-full max-w-lg text-center">

        <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-[#CCFF00]">
          FITLOG
        </p>

        <h1 className="text-8xl font-black tracking-tight text-white sm:text-9xl">
          404
        </h1>

        <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-slate-400 sm:text-base">
         The page you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-3xl bg-[#CCFF00] px-6 py-3.5 font-extrabold text-slate-950 transition duration-300 hover:shadow-emerald-400/20"
        >
          <ArrowLeft size={18} />
          BACK TO WORKOUTS
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;