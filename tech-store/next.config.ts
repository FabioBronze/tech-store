import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["utfs.io"],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "1mb", // Exemplo de configuração válida
      allowedOrigins: ["http://localhost:3000/"], // Defina os domínios permitidos
    },
  },
};

export default nextConfig;
