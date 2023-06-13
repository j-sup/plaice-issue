import withPlaiceholder from "@plaiceholder/next";
import withPlugins from "next-compose-plugins";

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withPlugins([[withPlaiceholder]], nextConfig);
