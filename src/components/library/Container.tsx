import React from 'react'
import { Separator } from "@/components/ui/seperator";

export const Container = ({
    title,
    description,
    children
}:{
    title:string,
    description:string,
    children:React.ReactNode
}) => {
  return (
    <>
        <header >
				<h1 className="block text-2xl font-bold text-gray-800 dark:text-white sm:text-3xl">
					{title}
				</h1>
				<p className="mt-2 text-lg text-gray-800 dark:text-white">
					{description}
				</p>
                <Separator className='mt-4' />
		</header>
        
			<div className="space-y-10 -mt-10   md:space-y-16">

                {children}

				

				
			</div>
    </>
  )
}
