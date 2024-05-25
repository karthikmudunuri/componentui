import { Container } from "@/components/library/Container";
import { Layout } from "@/components/library/Layout";
import { Section } from "@/components/library/Section";
import { Button } from "../../components/ui/Button";

import { Navigation } from "@/components/library/Navigation";
import { TailwindcssButtons } from "@/components/library/cssbuttons";

import GistEmbed from "@/components/library/gist";
import ExpandableComponent from "@/components/ui/expand";
import { Separator } from "@/components/ui/seperator";
export default function Buttons() {
   
  return (
    <Layout>
            <Navigation title="Home" page="Button" />
			<Container	title="Button" description="Displays a button or a component that looks like a button.">

                <Section title="Primary" description="Solid button" code="65120cf78314dbe4ee6cf341f754d702" height="300px">

				<Button >Component UI</Button>

				</Section>

				<Section title="Secondary" description="creates a variation of primary with hover effect" code="d5625b696ea08e18ad64f665410e3f93" height="300px">

				<Button variant={"secondary"}>Component UI</Button>

				</Section>

                <Section title="Outline" description="creates an outline across button" code="fc08f0a4d4e684533a16ea1e4ec9d48e" height="300px">

				<Button variant={"outline"}>Component UI</Button>

				</Section>

				<div>

				<h1 className="text-3xl font-bold text-gray-800 dark:text-white">Installation</h1>

				<Separator className="mt-2"/>
				</div>

				<GistEmbed gistId="531e84ed57c252122b8f1eb21fdb910d" height="100px" />

				<GistEmbed gistId="f97dec599618fab8ea0ed39d1aa1d770" height="100px" />

				

				<ExpandableComponent>

				<GistEmbed gistId="aba8bcf9a34221c8d72e160bd1836ce0" height="300px" />

				</ExpandableComponent>
				
				


                

                <Section title="Animated Buttons" description="created by tailwind css with some animations | click on the buttons to copy code for it 
				" code="076a16381bddffcf3eb6c6573ff28383" height="100px">


					

				<TailwindcssButtons/>

				<h3 className="text-sm text-center">Inspired from <Button variant={"secondary"} size={"sm"}>Accernity UI</Button></h3>

				</Section>

				<ExpandableComponent>

				<GistEmbed gistId="d7682d2cb9f25004a29930c707cc023e" height="300px" />

				</ExpandableComponent>

				
				


			</Container>
			

			
		</Layout>
  );
}
