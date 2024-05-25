import React from "react";
import { MacbookScroll } from "../ui/scroll";
import Link from "next/link";

export function MacbookScrollDemo() {
  return (
    <div className="overflow-hidden dark:bg-[#0B0B0F] bg-white w-full">
      <MacbookScroll
        title={
          <span>
            This Macbook is built with Tailwindcss.
          </span>
        }
        badge={
          <Link href="https://karthikmudunuri.netlify.app/">
                <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
    Component UI
  </span>
</button>
            
               
               
               
              
          </Link>
        }
        src={`https://github.com/karthikmudunuri/VRMALL/assets/102793643/c80e8b1b-f633-4847-a97e-2e16267e6b83`}
        showGradient={false}
      />
    </div>
  );
}
