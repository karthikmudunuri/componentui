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
import { Input } from "@/components/ui/cssinput";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/csslabel";
export default function Globes() {
    const LabelInputContainer = ({
        children,
        className,
      }: {
        children: React.ReactNode;
        className?: string;
      }) => {
        return (
          <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
          </div>
        );
      };

      const BottomGradient = () => {
        return (
          <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
          </>
        );
      };
      
   
  return (
    <Layout>
            <Navigation title="Home" page="Input" />
			<Container	title="Input" description="Displays a form input field or a component that looks like an input field.">

                <Section title="Input" description="Displays a form input field or a component that looks like an input field." code="b0fb3d695752ebb694f5e083f353f5bc" height="300px">

                 

                 
            
            <Input  placeholder="Input component" type="text" />
         
				</Section>

				

				<div>

				<h1 className="text-3xl font-bold text-gray-800 dark:text-white">Installation</h1>

				<Separator className="mt-2"/>
				</div>

                <GistEmbed gistId="64f855c601c2ff6b97b22994a4abac69" height="100px" />

                <GistEmbed gistId="f97dec599618fab8ea0ed39d1aa1d770" height="100px" />


                <ExpandableComponent>

				<GistEmbed gistId="f89a7e0fffe9d3ad85c9c599d6318912" height="300px" />

				</ExpandableComponent>

				
                

				

				<ExpandableComponent>

				<GistEmbed gistId="1cb44c4d64158061340ec0ffa0cffbd1" height="300px" />

				</ExpandableComponent>
				
				

				

				
				


			</Container>
			

			
		</Layout>
  );
}
