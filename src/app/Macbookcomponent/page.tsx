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
import { MacbookScrollDemo } from "@/components/library/macscroll";

export default function Globes() {
   
  return (
    <Layout>
            <Navigation title="Home" page="Macbook" />
			<Container	title="Macbook" description="Macbook is built with Tailwindcss.">

                <Section title="Macbook" description="Macbook is built with Tailwindcss." code="1abe2be5c86a2e64b8575fb16e8d8967" height="300px">

				<MacbookScrollDemo/>

				</Section>

				

				<div>

				<h1 className="text-3xl font-bold text-gray-800 dark:text-white">Installation</h1>

				<Separator className="mt-2"/>
				</div>

                <GistEmbed gistId="dae8c700550eea602fd58e519efe74b6" height="100px" />

                <GistEmbed gistId="f97dec599618fab8ea0ed39d1aa1d770" height="100px" />

                <GistEmbed gistId="92fddfc8c5c3f8b8a28e721048178da9" height="100px" />



				
                

				

				<ExpandableComponent>

				<GistEmbed gistId="b965bb1c2901e5f20b540e249533c76e" height="300px" />

				</ExpandableComponent>
				
				

				

				
				


			</Container>
			

			
		</Layout>
  );
}
