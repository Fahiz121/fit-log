"use client";
import Link from "next/link";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { Oswald } from "next/font/google";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { WorkoutsContext } from "@/context/WorkoutsContext";

const oswald = Oswald({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-oswald",
});

const Navbar = () => {
  const { plans, saved } = useContext(WorkoutsContext);
  const pathname = usePathname();
  const links = (
    <>
      <li>
        <Link
          href="/"
          className={
            pathname === "/workout"
              ? "text-[#C2F800] rounded-3xl hover:text-white"
              : ""
          }
        ></Link>
      </li>
      <li>
        <Link
          href="/workout"
          className={
            pathname === "/workout"
              ? "bg-[#1A2312] rounded-3xl text-[#C2F800]"
              : "mx-2 text-[#9CA3AF] border-none"
          }
        >
          Workouts
        </Link>
      </li>
      <li>
        <Link
          href="/my-plan"
          className={
            pathname === "/my-plan"
              ? "bg-[#1A2312] rounded-3xl text-[#C2F800]"
              : "text-[#9CA3AF]"
          }
        >
          My Plan
        </Link>
      </li>
    </>
  );
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#0C0D10]/95 shadow-sm backdrop-blur-xl">
      <div className="navbar container mx-auto min-h-16 max-w-7xl px-3 sm:px-5 lg:px-8">
        {/* Logo + Mobile Menu */}
        <div className="navbar-start min-w-0 gap-1">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              aria-label="Open navigation menu"
              className="btn btn-ghost btn-circle btn-sm text-white hover:bg-white/10 lg:hidden"
            >
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content z-[60] mt-3 w-52 rounded-xl border border-white/10 bg-[#15171D] p-2 text-white shadow-xl"
            >
              {links}
            </ul>
          </div>

          <Link href="/" className="flex min-w-0 items-center gap-2">
            <Image
              src={logo}
              alt="FitLog logo"
              width={32}
              height={32}
              className="h-8 w-8 shrink-0 object-contain"
            />
            <span
              className={`${oswald.className} text-lg font-bold tracking-wide text-white sm:text-xl`}
            >
              FITLOG
            </span>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-1 px-1">{links}</ul>
        </div>

        <div className="navbar-end min-w-0 gap-1 sm:gap-2">
          <Link
            href="/my-plan"
            className="flex items-center gap-1.5 rounded-xl px-2 py-2 text-xs font-bold text-[#D1D5DB] transition-colors hover:text-[#C2F800] sm:gap-2 sm:px-3 sm:text-sm lg:px-4"
          >
            <span>Plans</span>
            <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-[#C2F800] px-1.5 text-xs font-bold text-black sm:h-7 sm:min-w-7">
              {plans.length}
            </span>
          </Link>

          <Link
            href="/my-plan"
            className="flex items-center gap-1.5 rounded-xl px-2 py-2 text-xs font-bold text-[#9CA3AF] transition-colors hover:text-[#C2F800] sm:gap-2 sm:px-3 sm:text-sm lg:px-4"
          >
            <span>Saved</span>
            <span className="flex h-6 min-w-6 items-center justify-center rounded-full border border-[#D1D5DB] bg-black px-1.5 text-xs font-semibold text-white sm:h-7 sm:min-w-7">
              {saved.length}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
