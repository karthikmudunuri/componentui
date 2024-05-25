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
export default function Globes() {
   
  return (
    <Layout>
            <Navigation title="Home" page="Globecomponent" />
			<Container	title="Github globe" description="Displays a 3d globe">

                <Section title="Globe" description="created 3d globe inspired from github" code="de14a0de1f9dcc5ffe2cdb208065b926" height="300px">

				<GlobeThreeD/>

				</Section>

				

				<div>

				<h1 className="text-3xl font-bold text-gray-800 dark:text-white">Installation</h1>

				<Separator className="mt-2"/>
				</div>

				<GistEmbed gistId="64f855c601c2ff6b97b22994a4abac69" height="100px" />

                <GistEmbed gistId="e3d55fe1f0285fd6c0e699d6a67db91a" height="100px" />


				<GistEmbed gistId="f97dec599618fab8ea0ed39d1aa1d770" height="100px" />

				

				<ExpandableComponent>

				<GistEmbed gistId="7f7ecd2ae26abca4baf548bb77f35a3b" height="300px" />

				</ExpandableComponent>
				
				

				<ExpandableComponent>

				<GistEmbed gistId="9ecc55e2cd01603ee0351d5dd4734e47" height="300px" />

				</ExpandableComponent>

				
				


			</Container>
			

			
		</Layout>
  );
}
