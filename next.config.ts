import type {NextConfig} from "next"
import {INFINITE_CACHE} from "next/dist/lib/constants"

const nextConfig: NextConfig = {
  experimental: {
    useCache: true,
    cacheLife: {
      default: {
        stale: undefined,
        revalidate: INFINITE_CACHE,
        expire: INFINITE_CACHE,
      },
    },
  },
  typescript: {
    // Disable build errors since dev dependencies aren't loaded on prod. Rely on GitHub actions to throw any errors.
    ignoreBuildErrors: process.env.CI !== "true",
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  }
}

module.exports = nextConfig
