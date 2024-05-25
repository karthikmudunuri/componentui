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
import { TabsDemo } from "@/components/library/sidebarr";
export default function Globes() {
   
  return (
    <Layout>
            <Navigation title="Home" page="Sidebarcomponent" />
			<Container	title="Sidebar" description="A sidebar Layout using tabs">

                <Section title="Sidebar" description="A sidebar Layout using tabs component" code="da35f86a8c5f440cb4caab15389b55a4" height="300px">

				<TabsDemo/>

				</Section>

				

				<div>

				<h1 className="text-3xl font-bold text-gray-800 dark:text-white">Installation</h1>

				<Separator className="mt-2"/>
				</div>

				<GistEmbed gistId="6b565ed206c600f7a245ab8ca0a34283" height="100px" />

                

				

				<ExpandableComponent>

				<GistEmbed gistId="9c91d93749d71dffdc24be2f299a4175" height="300px" />

				</ExpandableComponent>
				
				

				

				
				


			</Container>
			

			
		</Layout>
  );
}
