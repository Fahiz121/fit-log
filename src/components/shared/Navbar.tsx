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
    <nav className="bg-[#0C0D10] shadow-sm">
      <div className="auto navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link href={`/`}>
            <div className={`${oswald.className} flex gap-2  text-[#ffff]`}>
              <Image src={logo} alt=""></Image>
              FITLOG
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-2">
          <div className="flex items-center">
            {/* Plan */}
            <div className="flex items-center">
              <Link
                href="/my-plan"
                className="rounded-2xl px-4 py-2 font-bold text-[#D1D5DB] transition-colors hover:text-[#C2F800]"
              >
                Plans
              </Link>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#C2F800] text-sm font-semibold text-black">
                {plans.length}
              </span>
            </div>

            {/* Saved */}
            <div className="flex items-center">
              <Link
                href="/my-plan"
                className="px-4 py-2 font-bold text-[#9CA3AF] transition-colors hover:text-[#C2F800]"
              >
                Saved
              </Link>
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#D1D5DB] bg-black text-sm font-semibold text-white">
                {saved.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
