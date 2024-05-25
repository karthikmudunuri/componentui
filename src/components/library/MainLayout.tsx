// MainLayout.tsx
import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <Navbar />

      <main className="flex-grow">
        <div className="mx-auto w-full h-full">{children}</div>
      </main>

     
    </div>
  );
};
