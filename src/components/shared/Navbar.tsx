import Link from "next/link";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { Oswald } from "next/font/google";

const oswald = Oswald({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-oswald",
});

const Navbar = () => {
  const links = (
    <>
      <li>
        <Link href="/" className={`text-[#C2F800] hover:text-white`}></Link>
      </li>
      <li>
        <Link
          href="/workout"
          className={`text-[#C2F800] mx-2 hover:text-shadow-green-300 rounded-3xl border-none bg-[#1A2312]`}
        >
          Workouts
        </Link>
      </li>
      <li>
        <Link
          href="/my-plan"
          className={`text-[#C2F800] hover:text-shadow-green-300 rounded-3xl border-none bg-[#1A2312]`}
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
              <button className="rounded-2xl px-4 py-2 font-bold text-[#D1D5DB]">
                Plan
              </button>
              <span className="flex h-8 w-8 items-center justify-center bg-[#C2F800] rounded-full text-sm font-semibold text-black">3</span>
            </div>

            {/* Saved */}
            <div className="flex items-center">
              <Link href={'/'}>
              <button className="px-4 hover:text-[#C2F800] py-2 font-bold text-[#9CA3AF]">
                Saved
              </button>
              </Link>
              <span className="flex h-8 w-8 items-center justify-center rounded-full text-sm bg-black border-1 border-[#D1D5DB] font-semibold rounded-b-full text-white">5</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
