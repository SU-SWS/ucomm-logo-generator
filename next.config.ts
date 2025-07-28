import type {NextConfig} from "next"

const nextConfig: NextConfig = {
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
