// "use client";

// import AnimatedDivider from "@/components/AnimatedDivider";
// import AnimatedVerticalDivider from "@/components/AnimatedVerticalDivider";

// const CircleCollection = () => {
//   return (
//     <section className="relative h-screen w-full bg-black text-white">

//       {/* DESKTOP GRID */}
//       <div className="hidden md:grid h-full grid-cols-2 grid-rows-2 relative">

//         {/* VERTICAL DIVIDER */}
//         <div className="absolute inset-y-0 left-1/2 -translate-x-1/2">
//           <AnimatedVerticalDivider className="h-full opacity-60" />
//         </div>

//         {/* HORIZONTAL DIVIDER */}
//         <div className="absolute inset-x-0 top-1/2 -translate-y-1/2">
//           <AnimatedDivider className="opacity-60" />
//         </div>

//         {/* QUADRANT 1 */}
//         <div className="flex items-center justify-center">
//           <span className="text-sm uppercase tracking-widest text-gray-400">
//             Part One
//           </span>
//         </div>

//         {/* QUADRANT 2 */}
//         <div className="flex items-center justify-center">
//           <span className="text-sm uppercase tracking-widest text-gray-400">
//             Part Two
//           </span>
//         </div>

//         {/* QUADRANT 3 */}
//         <div className="flex items-center justify-center">
//           <span className="text-sm uppercase tracking-widest text-gray-400">
//             Part Three
//           </span>
//         </div>

//         {/* QUADRANT 4 */}
//         <div className="flex items-center justify-center">
//           <span className="text-sm uppercase tracking-widest text-gray-400">
//             Part Four
//           </span>
//         </div>
//       </div>

//       {/* MOBILE STACK */}
//       <div className="flex flex-col md:hidden h-full">

//         {["Part One", "Part Two", "Part Three", "Part Four"].map(
//           (item, index) => (
//             <div
//               key={item}
//               className="flex-1 flex items-center justify-center"
//             >
//               <span className="text-xs uppercase tracking-widest text-gray-400">
//                 {item}
//               </span>

//               {/* Divider between items (except last) */}
//               {index !== 3 && (
//                 <div className="absolute bottom-0 w-full px-8">
//                   <AnimatedDivider className="opacity-40" />
//                 </div>
//               )}
//             </div>
//           )
//         )}

//       </div>
//     </section>
//   );
// };

// export default CircleCollection;


"use client";

import AnimatedDivider from "@/components/AnimatedDivider";
import AnimatedVerticalDivider from "@/components/AnimatedVerticalDivider";
import CircularText from "@/components/CircularText";

const CircleItem = ({ text }: { text: string }) => {
  return (
    <div className="w-[120px] h-[120px] md:w-[140px] md:h-[140px] flex items-center justify-center">
      <CircularText
        text={text}
        onHover="speedUp"
        spinDuration={20}
        className="scale-[0.85]"
      />
    </div>
  );
};

const CircleCollection = () => {
  return (
    <section className="relative h-screen w-full bg-black text-white">

      {/* DESKTOP (4 QUADRANTS) */}
      <div className="hidden md:grid h-full grid-cols-2 grid-rows-2 relative">

        {/* STRUCTURAL DIVIDERS */}
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2">
          <AnimatedVerticalDivider className="h-full opacity-60" />
        </div>

        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2">
          <AnimatedDivider className="opacity-60" />
        </div>

        {/* QUADRANTS */}
        <div className="flex items-center justify-center">
          <CircleItem text="REACT✦BITS✦COMPONENTS✦" />
        </div>

        <div className="flex items-center justify-center">
          <CircleItem text="FRAMER✦MOTION✦ANIMATION✦" />
        </div>

        <div className="flex items-center justify-center">
          <CircleItem text="NEXT✦JS✦ARCHITECTURE✦" />
        </div>

        <div className="flex items-center justify-center">
          <CircleItem text="DESIGN✦SYSTEM✦UI✦" />
        </div>
      </div>

      {/* MOBILE (STACKED) */}
      <div className="flex flex-col md:hidden h-full">

        {[
          "REACT✦3d✦COMPONENTS✦",
          "UI✦MOTION✦ANIMATION✦",
          "NEXT✦JS✦ARCHITECTURE✦",
          "DESIGN✦SYSTEM✦UI✦",
        ].map((text, index) => (
          <div
            key={text}
            className="relative flex-1 flex items-center justify-center"
          >
            <CircleItem text={text} />

            {/* DIVIDER BETWEEN ITEMS */}
            {index !== 3 && (
              <div className="absolute bottom-0 w-full px-10">
                <AnimatedDivider className="opacity-40" />
              </div>
            )}
          </div>
        ))}

      </div>
    </section>
  );
};

export default CircleCollection;
