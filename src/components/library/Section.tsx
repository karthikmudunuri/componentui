// /src/components/library/Section.tsx

import { useState } from 'react';
import React from 'react';
import { IconCheck, IconClipboard } from '@tabler/icons-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Fullscreen, SquareTerminal } from 'lucide-react'
import { Code } from './code'
import GistEmbed from './gist';

export const Section = ({
  title,
  description,
  children,
  code,
  height
}: {
  title: string,
  description: string,
  children: React.ReactNode,
  code: string,
  height?: string
}) => {

  return (
    <div className="mt-8"> {/* Added margin to create separation */}
      <div>
        <h2 className="text-lg font-bold text-gray-800 dark:text-white">
          {title}
        </h2>
        <p className="mt-1 mb-3 text-sm text-gray-800 dark:text-white">
          {description}
        </p>
      </div>
      <Tabs defaultValue="preview" className="w-[1000px]">
        <TabsList>
          <TabsTrigger value="preview" className='gap-2'><Fullscreen />Preview</TabsTrigger>
          <TabsTrigger value="code" className='gap-2'><SquareTerminal />Code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview">
          <div className="mt-3">
            <div className="flex flex-col rounded-xl border p-6 shadow-sm dark:text-white ">
              <div className="flex flex-wrap gap-2">
                {children}
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="code">
          <div>
            <GistEmbed gistId={code} height={height}/>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
