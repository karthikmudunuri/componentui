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
export default function Buttons() {
   
  return (
    <Layout>
            <Navigation title="Home" page="Movingborder" />
			<Container	title="Movingborder" description="Displays a tailwindcss moving border cards">

                <Section title="Moving-border" description="created example for work experience" code="e7dcff60d4da6e7b3999c9cdbf83c145" height="300px">

				<Experience/>

				</Section>

				

				<div>

				<h1 className="text-3xl font-bold text-gray-800 dark:text-white">Installation</h1>

				<Separator className="mt-2"/>
				</div>

				<GistEmbed gistId="64f855c601c2ff6b97b22994a4abac69" height="100px" />

				<GistEmbed gistId="f97dec599618fab8ea0ed39d1aa1d770" height="100px" />

				

				<ExpandableComponent>

				<GistEmbed gistId="3c5ca99dc972d762c8c96f3b142e130f" height="300px" />

				</ExpandableComponent>
				
				

				<ExpandableComponent>

				<GistEmbed gistId="fdb5d30d28663fd2ebaf123b825017e6" height="300px" />

				</ExpandableComponent>

				
				


			</Container>
			

			
		</Layout>
  );
}
