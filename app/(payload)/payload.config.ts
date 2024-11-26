import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { buildConfig } from 'payload';
import sharp from 'sharp';
import collections from './collections';
import globals from './globals';
import { getServerSideURL } from './lib/urls';
import s3 from './plugins/s3';


export default buildConfig({
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
  sharp,
  collections,
  globals,
  secret: process.env.PAYLOAD_SECRET || '',
  cors: [getServerSideURL()].filter(Boolean),
  localization: {
    locales: ['en', 'zh'],
    defaultLocale: 'en',
  },
  plugins: [
    s3,
  ],
  admin: {
    components: {
      beforeDashboard: [
        '@payload/components/statistics'
      ],
    },
  },
})