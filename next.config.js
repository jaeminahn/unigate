/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/tentang-kami",
        destination: "/#about",
        permanent: true,
      },
      {
        source: "/kurikulum",
        destination: "/#curriculum",
        permanent: true,
      },
      {
        source: "/institusi-mitra",
        destination: "/#partners",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/#contact",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
