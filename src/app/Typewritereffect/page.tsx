import { Container } from "@/components/library/Container";
import { Layout } from "@/components/library/Layout";
import { Section } from "@/components/library/Section";
import { Button } from "../../components/ui/Button";

import { Navigation } from "@/components/library/Navigation";
import { TailwindcssButtons } from "@/components/library/cssbuttons";

import GistEmbed from "@/components/library/gist";
import ExpandableComponent from "@/components/ui/expand";
import { Separator } from "@/components/ui/seperator";
import Experience from "@/components/library/experience";
import { GlobeThreeD } from "@/components/library/3dglobe";
import { TabsDemo } from "@/components/library/tabs";
import { TableDemo } from "@/components/library/demotable";
import Clients from "@/components/library/testimonals";
import { Hero } from "@/components/library/hero";
import { GlowingStarsBackgroundCardPreview } from "@/components/library/next";
import { FloatingNavDemo } from "@/components/library/floatingnav";
import { TypewriterEffectSmoothDemo } from "@/components/library/typewritereffect";

export default function Globes() {
   
  return (
    <Layout>
            <Navigation title="Home" page="Typewriter Effect" />
			<Container	title="Typewriter Effect" description="Text generates as if it is being typed on the screen.">

                <Section title="Typewriter Effect" description="Text generates as if it is being typed on the screen." code="ccb50f71707887fd21af580b605d9571" height="300px">

				<TypewriterEffectSmoothDemo/>

				</Section>

				

				<div>

				<h1 className="text-3xl font-bold text-gray-800 dark:text-white">Installation</h1>

				<Separator className="mt-2"/>
				</div>

                <GistEmbed gistId="64f855c601c2ff6b97b22994a4abac69" height="100px" />

                <GistEmbed gistId="f97dec599618fab8ea0ed39d1aa1d770" height="100px" />



				
                

				

				<ExpandableComponent>

				<GistEmbed gistId="42de70c43251898a066f3bdb17faf6db" height="300px" />

				</ExpandableComponent>
				
				

				

				
				


			</Container>
			

			
		</Layout>
  );
}
