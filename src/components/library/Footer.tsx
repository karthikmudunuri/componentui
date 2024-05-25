import { GiWorld } from 'react-icons/gi';
import { SiGithub, SiLinkedin } from 'react-icons/si';

export const Footer = () => {
  return (
    <footer className="w-full border-t bg-white dark:bg-black mt-auto">
      <div className="flex h-16 items-center justify-between px-10 sm:px-16 lg:px-10">
        <a href="/" className="inline-flex h-10 items-center justify-center text-lg font-bold text-gray-800 dark:text-white">
          Component UI
        </a>
        <nav className="flex items-center space-x-1">
          <a href="https://karthikmudunuri.netlify.app/" className="h-10 w-10 p-2 text-gray-800 hover:text-[#4078c0] dark:text-white">
            <GiWorld className="h-full w-full" />
          </a>
          <a href="https://www.linkedin.com/in/karthikmudunuri/" className="h-10 w-10 p-2 text-gray-800 hover:text-[#4078c0] dark:text-white">
            <SiLinkedin className="h-full w-full" />
          </a>
          <a href="https://github.com/karthikmudunuri" className="h-10 w-10 p-2 text-gray-800 hover:text-[#4078c0] dark:text-white">
            <SiGithub className="h-full w-full" />
          </a>
        </nav>
      </div>
    </footer>
  );
};
