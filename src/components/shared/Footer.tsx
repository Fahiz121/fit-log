import logo from "@/assets/logo.png";
import { Oswald } from "next/font/google";
import Image from "next/image";

const oswald = Oswald({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-oswald",
});
const FooterPage = () => {
  return (
    <footer className="mt-4 border-t border-[#232732] bg-black px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 sm:flex-row sm:justify-between sm:gap-6">
        <div
          className={`${oswald.className} flex shrink-0 items-center gap-2 text-xl font-bold text-white`}
        >
          <Image
            src={logo}
            alt="FitLog logo"
            width={36}
            height={36}
            sizes="36px"
            className="h-9 w-9 object-contain"
          />
          <span>FITLOG</span>
        </div>

        <p className="max-w-full text-center text-xs leading-5 text-[#9CA3AF] sm:text-right sm:text-sm">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default FooterPage;
