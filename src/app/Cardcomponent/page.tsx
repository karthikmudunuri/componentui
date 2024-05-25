import { Container } from "@/components/library/Container";
import { Layout } from "@/components/library/Layout";
import { Section } from "@/components/library/Section";
import { Button } from "../../components/ui/Button";

import { Navigation } from "@/components/library/Navigation";
import { TailwindcssButtons } from "@/components/library/cssbuttons";

import GistEmbed from "@/components/library/gist";
import ExpandableComponent from "@/components/ui/expand";
import { Separator } from "@/components/ui/seperator";
import { Cards } from "@/components/library/cards";
import { RxButton } from "react-icons/rx";
import { Cardex } from "@/components/library/ex1";
import { ThreeDCardDemo } from "@/components/library/3dCard";
export default function Cardds() {
   
  return (
    <Layout>
            <Navigation title="Home" page="Card" />
			<Container	title="Card" description="Displays a card with header, content, and footer.">

                <Section title="Card" description="Card with header, content, and footer" code="7b69cf35ccda951a1c186ec8a169b37c" height="300px">

                <Cards
                
                title="Button"
                description="Button component"
                link={"/Buttoncomponent"}
              >
                <RxButton size={60} />
              </Cards>

				</Section>

                <GistEmbed gistId="cba0d3feb8e503c4eb34bc0f44c73fa1" height="100px" />


                <div>

				<h1 className="text-3xl font-bold text-gray-800 dark:text-white">Installation</h1>

				<Separator className="mt-2"/>
				</div>

				<GistEmbed gistId="64f855c601c2ff6b97b22994a4abac69" height="100px" />

				<GistEmbed gistId="f97dec599618fab8ea0ed39d1aa1d770" height="100px" />

				

				<ExpandableComponent>

				<GistEmbed gistId="af4ae6ff28403b5ba8cd3c8b90a69835" height="300px" />

				</ExpandableComponent>
				
				



				<Section title="Example" description="creates a variation of primary with hover effect" code="ab1d63c38c94fcbac36add5e9aebbf81" height="300px">

				<Cardex/>

				</Section>

                

				
                

                <Section title="ThreeD Card" description="created by tailwind css with some animations 
				" code="73c44cf8a5121edce1df149e64da9a7b" height="100px">


					

				<ThreeDCardDemo/>

				

				</Section>

				<ExpandableComponent>

				<GistEmbed gistId="cc4d21988e8e4bac35c412bfe9c13492" height="300px" />

				</ExpandableComponent>

				
				


			</Container>
			

			
		</Layout>
  );
}
