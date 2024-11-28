import { withPayload } from '@payloadcms/next/withPayload'
import withPWA from 'next-pwa';

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  }
}

export default withPayload(withPWA(nextConfig))
