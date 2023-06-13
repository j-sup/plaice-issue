import withPlaiceholder from "@plaiceholder/next";
import withPlugins from "next-compose-plugins";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["https://i.postimg.cc"],
  },
};

export default withPlugins([[withPlaiceholder]], nextConfig);
