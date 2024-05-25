import React from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

export const Layout = (
    {
        children
    }: {
        children: React.ReactNode
    }
) => {
  return (
    <div className="relative min-h-screen bg-white dark:bg-black">
		<Navbar/>

		

		<main className=" px-10 py-8 sm:px-16 lg:px-30">

		<div className="mx-auto w-full  max-w-5xl space-y-20 ">

            {children}

        </div>
       

        </main>
       

    </div>
  )
}
