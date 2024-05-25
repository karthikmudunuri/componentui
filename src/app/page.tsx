"use client";

import { Container } from "@/components/library/Container";
import { Footer } from "@/components/library/Footer";
import { Layout } from "@/components/library/Layout";
import { MainLayout } from "@/components/library/MainLayout";
import { Section } from "@/components/library/Section";
import { Cards } from "@/components/library/cards";
import { Code } from "@/components/library/code";
import GistEmbed from "@/components/library/gist";
import { Ellipsis, Laptop, Move3D, PanelLeftDashed, PanelTop, Sparkles, TableProperties, TextCursorInput } from "lucide-react";
import Image from "next/image";
import { GiWorld } from "react-icons/gi";
import { RxButton } from "react-icons/rx";
import { TbArrowMoveRight, TbLayoutNavbarFilled } from "react-icons/tb";
import { TiTabsOutline } from "react-icons/ti";

export default function Home() {
  return (
    <MainLayout>
      <main className="flex p-8">
        <section className=" min-h-screen ">
          <div className="flex flex-wrap gap-4 justify-center">
          <Cards
                
                title="Button"
                description="Button component"
                link={"/Buttoncomponent"}
              >
                <RxButton size={60} />
              </Cards>
              <Cards
                
                title="Card"
                description="Card component"
                link={"/Cardcomponent"}
              >
                <PanelTop size={60}/>
              </Cards>
              <Cards
                
                title="Moving border"
                description="Card component with moving border"
                link={"/Movingborder"}
              >
                <TbArrowMoveRight size={60}/>
              </Cards>
              <Cards
                
                title="Globe 3d"
                description="globe component from github"
                link={"/Globecomponent"}
              >
                <GiWorld size={60}/>
              </Cards>
              <Cards
                
                title="Sidebar"
                description="Sidebar component with tabs"
                link={"/Sidebarcomponent"}
              >
                <PanelLeftDashed size={60}/>
              </Cards>
              <Cards
                
                title="Table"
                description="Table for listing everything"
                link={"/Tablecomponent"}
              >
                <TableProperties size={60}/>
              </Cards>
              <Cards
                
                title="Input"
                description="Displays a form input field."
                link={"/Inputcomponent"}
              >
                <TextCursorInput size={60}/>
              </Cards>
              <Cards
                
                title="Stars"
                description="Glowing stars for card background."
                link={"/Glowingstarscomponent"}
              >
                <Sparkles size={60} />
              </Cards>
              <Cards
                
                title="Tabs"
                description="Tabs to switch content."
                link={"/Tabscomponent"}
              >
                <TiTabsOutline size={60}/>
              </Cards>

              <Cards
                
                title="Macbook"
                description="Macbook is built with Tailwindcss."
                link={"/Macbookcomponent"}
              >
                <Laptop size={60} />
              </Cards>
              <Cards
                
                title="Navbar"
                description="A floating navbar."
                link={"/Floatingnavbar"}
              >
               <TbLayoutNavbarFilled size={60}/>
              </Cards>
              <Cards
                
                title="Typewriter Effect"
                description="Text generates as typed."
                link={"/Typewritereffect"}
              >
                <Ellipsis size={60}/>
              </Cards>
            
          </div>
        </section>
      </main>
      
    </MainLayout>
  );
}
