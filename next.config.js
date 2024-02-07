/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      // {
      //   protocol: "https",
      //   hostname: "lh3.googleusercontent.com",
      //   port: "",
      //   pathname: "/**",
      // },
      // {
      //   protocol: "https",
      //   hostname: "drive.google.com",
      //   port: "",
      //   pathname: "/**",
      // },
      {
        protocol: "https",
        hostname:
          "firebasestorage.googleapis.com/v0/b/abhishek-yadav-7cfd7.appspot.com/o",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
