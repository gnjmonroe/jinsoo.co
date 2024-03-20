import createMdx from '@next/mdx';
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

const withVanillaExtract = createVanillaExtractPlugin({
  identifiers: 'short',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['mdx', 'ts', 'tsx'],
  reactStrictMode: true,
};

const withMDX = createMdx({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

export default withVanillaExtract(withMDX(nextConfig));
