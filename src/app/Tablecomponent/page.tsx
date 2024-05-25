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
import { TableDemo } from "@/components/library/demotable";
export default function Globes() {
   
  return (
    <Layout>
            <Navigation title="Home" page="Table" />
			<Container	title="Table" description="Table for listing everything">

                <Section title="Table" description="A list of users" code="cb6780a82380ce4d942c5577a880a88d" height="300px">

				<TableDemo/>

				</Section>

				

				<div>

				<h1 className="text-3xl font-bold text-gray-800 dark:text-white">Installation</h1>

				<Separator className="mt-2"/>
				</div>

				
                

				

				<ExpandableComponent>

				<GistEmbed gistId="d8d21cb406965aa9eddb42d21247c9f4" height="300px" />

				</ExpandableComponent>
				
				

				

				
				


			</Container>
			

			
		</Layout>
  );
}
