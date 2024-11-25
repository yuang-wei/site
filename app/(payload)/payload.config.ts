import { postgresAdapter } from '@payloadcms/db-postgres';
import { vercelPostgresAdapter } from '@payloadcms/db-vercel-postgres'
import { s3Storage } from '@payloadcms/storage-s3';
import { buildConfig } from 'payload';
import sharp from 'sharp';
import collections from './collections';
import globals from './globals';
import { getServerSideURL } from './lib/urls';

const db = process.env.NODE_ENV === 'development' ? postgresAdapter({
  pool: {
    connectionString: process.env.DATABASE_URI,
  },
}) : vercelPostgresAdapter()

export default buildConfig({
  db,
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
    s3Storage({
      collections: {
        media: true,
      },
      bucket: process.env.S3_BUCKET,
      config: {
        endpoint: `${process.env.R2_ENDPOINT}/media`,
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID,
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
        },
        region: 'auto',
      },
    }),
  ],
})