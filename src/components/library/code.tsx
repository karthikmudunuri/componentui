"use client"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useState } from 'react';
import React from 'react'
import { IconCheck, IconClipboard } from '@tabler/icons-react';

export const Code = ({
    code,
    
}:{
    code:string
    
}) => {

    const [copy, setCopy] = useState(false);

    function handleClick(): void {
        navigator.clipboard.writeText(code);
        setCopy(true);
        setTimeout(() => {
            setCopy(false);
        }, 3000);
    }

    
  return (
    <div >
        <div className='max-w-2xl min-w-[25rem] bg-[#3a404d] rounded-md overflow-hidden'>

        

        <div className="flex justify-end px-4 text-black dark:text-white text-xs items-center">
            
            {copy ? (
                <button className="py-1 inline-flex items-center gap-1">
                <span className='text-base mt-1 '>
                    <IconCheck size={16} />
                </span>
                    Copied!
                </button>
            ):(
            <button className="py-1 inline-flex items-center gap-1" onClick={handleClick}>
            <span className='text-base mt-1 '>
                <IconClipboard size={16} />
            </span>
                Copy
            </button>
            )}
        </div>
    <SyntaxHighlighter language="jsx" style={atomOneDark}>
      {code}
    </SyntaxHighlighter>
    </div>
    </div>
  )
}
