/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        // old blog post was replaced by the Top 10 CP fittings guide
        source: "/blog/cp-bath-fitting-manufacturer-in-delhi",
        destination: "/blog/top-10-cp-bathroom-fittings-in-delhi",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
