import { s3Storage } from "@payloadcms/storage-s3";

export default s3Storage({
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
})