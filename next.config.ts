import { withPayload } from '@payloadcms/next/withPayload'
import withPWA from 'next-pwa';

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  }
}
const pwaConfig = withPWA({})

const payloadConfig = withPayload({})

export default {
  ...pwaConfig,
  ...nextConfig,
  ...payloadConfig,
}
