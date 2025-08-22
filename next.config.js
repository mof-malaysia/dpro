import { withPayload } from '@payloadcms/next/withPayload'

import redirects from './redirects.js'

const NEXT_PUBLIC_SITE_URL = process.env.NEXT_PUBLIC_SITE_URL
const PRODUCTION_URL = process.env.PRODUCTION_URL
  ? process.env.PRODUCTION_URL
  : undefined || process.env.__NEXT_PRIVATE_ORIGIN || 'http://localhost:3000'

const urls = [NEXT_PUBLIC_SITE_URL, PRODUCTION_URL]

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      ...urls.map((item) => {
        return new URL(item)
      }),
    ],
  },
  webpack: (webpackConfig) => {
    webpackConfig.resolve.extensionAlias = {
      '.cjs': ['.cts', '.cjs'],
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
      '.mjs': ['.mts', '.mjs'],
    }

    return webpackConfig
  },
  reactStrictMode: true,
  redirects,
  output: 'standalone',
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
