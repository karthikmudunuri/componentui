
import { GiWorld } from 'react-icons/gi'
import { SiGithub, SiLinkedin } from 'react-icons/si'
import { ModeToggle } from './theme'
import { CommandDemo } from './command'

export const Navbar = () => {
  return (
   
        <header className="w-full sticky top-0 z-50 border-b bg-white dark:bg-black">
			<div className="flex h-16 items-center  px-10 sm:px-16 lg:px-10">
				<div className="mx-auto w-full   space-y-20">

					<div className="flex justify-between">
						<div className="flex flex-1 items-start justify-start">
							<a href="/" className="inline-flex h-10 items-center justify-center text-lg font-bold text-gray-800 dark:text-white">
							Component UI
							</a>
							
						</div>

						<div className="flex flex-1 items-center justify-end">
                            <div className='mr-4'><CommandDemo/></div>
                        
							<nav className="flex items-center space-x-1">

                                <div className="h-10 w-10 mt-1"><ModeToggle/></div>
                               
                            
							<a href="https://karthikmudunuri.netlify.app/" className="h-10 w-10 p-2 text-gray-800 hover:text-[#4078c0] dark:text-white">
									<GiWorld className="h-full w-full"/>
									

								</a>
								<a href="https://www.linkedin.com/in/karthikmudunuri/" className="h-10 w-10 p-2 text-gray-800 hover:text-[#4078c0] dark:text-white">
									<SiLinkedin className="h-full w-full"/>

								</a>
								<a href="https://github.com/karthikmudunuri" className="h-10 w-10 p-2 text-gray-800 hover:text-[#4078c0] dark:text-white">
									<SiGithub className="h-full w-full"/>
									

								</a>

                                
							</nav>
							
						</div>
					</div>

				</div>
			</div>
		</header>
    
  )
}
