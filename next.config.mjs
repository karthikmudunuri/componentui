/** @type {import('next').NextConfig} */
const nextConfig = {

   
    
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com' ,
          
        },
        {
            protocol: 'https',
            hostname: 'github.com' ,
            
          },
  {
            protocol: 'https',
            hostname: 'deepnote.com' ,
            
          },
      ],
    },
  }
export default nextConfig;
