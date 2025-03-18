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
  ],
}
};

export default nextConfig;
