
import Image from "next/image";
import dynamic from "next/dynamic";
import "../components/_ui/Header/header.css";
import Header from "@/components/_ui/Header/Header";
import ShinyText from "@/components/_ui/ShinyText/ShinyText";
import InitialPage from "@/app/InitialPage";
import Cubes from "@/components/Cubes";

export default function Home() {
  return (
    <>
      <div className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a1f] to-[#0f0a20]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-purple-600/20 rounded-full blur-[200px]"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
       
        </div>
        <Header title="Meu App" />
        <main className="relative z-10 flex flex-col items-center justify-center px-8 py-20 text-center">
          <InitialPage></InitialPage>
        </main>
      </div>
    </>
  );
}
