"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3dcard";
import Link from "next/link";
import { Separator } from "../ui/seperator";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl text-center font-bold text-neutral-600 dark:text-white"
        >
          Component UI
        </CardItem>
        <CardItem
         
          translateZ="60"
          className="text-neutral-500 text-center  text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Hover the card to see animation
          
        </CardItem>

          <Separator/>

       

        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="https://github.com/karthikmudunuri/VRMALL/assets/102793643/c80e8b1b-f633-4847-a97e-2e16267e6b83"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>

        <Separator/>

        <CardItem translateZ="100"  className="flex justify-center items-center">
        <div className="flex justify-center items-center mt-10 ml-32">


          
       
        <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          Open Now
        </button>
  
        
      
        </div>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
