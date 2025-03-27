import type { NextConfig } from "next";

const nextConfig: NextConfig = {
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'ebuxksftjojwkvkolltf.supabase.co',
      port: '',
      pathname: '/storage/v1/object/public/cabin-images/**',
      search: '',
    },
     {
      protocol: 'https',
      hostname: 'lh3.googleusercontent.com',
      port: '',
      pathname: '**',
      search: '',
    },
  ],
}
};

export default nextConfig;
