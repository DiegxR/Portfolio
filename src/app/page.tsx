import Control from "@/components/ThreeJs/Control";
import Objects from "@/components/ThreeJs/Objects";
import ThreeScene from "@/components/ThreeJs/ThreeScene";
import IntroPage from "@/components/Layout/HomePage/IntroPage";
import Responsive from "@/components/Responsive";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <div className="hidden md:block">
        <IntroPage />
      </div>
      <div className="absolute md:hidden top-0 left-0 z-[99]">
        <Responsive />
      </div>
    </main>
  );
}
