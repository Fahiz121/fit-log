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
    <footer className="mt-4 border-t border-[#232732] bg-black px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row">
        <div
          className={`${oswald.className} flex items-center gap-2 text-xl text-white`}
        >
          <Image
            src={logo}
            alt="FitLog logo"
            width={36}
            height={36}
            className="object-contain"
          />
          <span>FITLOG</span>
        </div>

        <p className="text-center text-sm text-[#9CA3AF]">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default FooterPage;
