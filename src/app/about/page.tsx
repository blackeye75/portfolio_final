// "use client";
// import MagnetLines from "../../components/MagnetLines";

// import React from 'react'

// const Page = () => {
//   return (
//     <div>
//       <div className=" absoluteflex items-center justify-center "><MagnetLines
//         rows={7}
//         columns={30}
//         containerSize="170vmin"
//         lineColor="red"
//         lineWidth="0.8vmin"
//         lineHeight="5vmin"
//         baseAngle={0}
//         style={{ margin: "2rem auto" }}
//       /></div>

//     </div>
//   )
// }

// export default Page
"use client";

import AboutHero from "./components/AboutHero";
import AboutContent from "./components/AboutContent";
import Philosophy from "./components/Philosophy";
import TechStack from "./components/TechStack";
import DarkVeil from "@/components/DarkVeil";
import CircularText from "@/components/CircularText";
import CircleCollection from "./components/CircleCollection";

export default function AboutPage() {
  return (
    <div style={{ width: '100%', height: '600px', position: 'relative', top: 40, left: 0 }}>
      <DarkVeil />
      <main className="w-full min-h-screen  z-[1] absolute bg-cover sm:top-0 top-10">
        <AboutHero />
        {/* <AboutContent /> */}
        <Philosophy />
        <TechStack />
        <CircleCollection />
      </main>
    </div>
  );
}
