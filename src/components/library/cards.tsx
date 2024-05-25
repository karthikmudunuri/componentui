"use client"
import React from 'react'
import { Separator } from "@/components/ui/seperator";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
    } from "@/components/ui/card";

import { Button } from '../ui/Button';

export const Cards = ({
    title,
    description,
    children,
    onClick,
    link
}:{
    title:string,
    description:string,
    onClick?: () => void;
    children:React.ReactNode,
    link?:string
}) => {
    const handleClick = () => {
        if (onClick) {
          onClick();
        }
        if (link) {
          window.open(link, '_self');
        }
      };
    return (
   
        <Card className='w-[300px]'>
        <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
            <Separator />
        </CardHeader>
        
        <CardContent className='flex items-center justify-center '>{children} </CardContent>
        
        <CardFooter  className='flex items-center justify-center '>
        
          <Button variant={'secondary'} onClick={handleClick} >
           View now
         </Button>
        </CardFooter>
        </Card>



  )
}
