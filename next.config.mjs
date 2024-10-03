/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'scontent.cdninstagram.com',
          pathname: '/**', // Permite todos os caminhos desse domínio
        },
      ],
    },
  }
  
  export default nextConfig
  