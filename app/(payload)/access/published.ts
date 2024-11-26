import type { Access } from 'payload'

export const published: Access = ({ req: { user } }) => {

  return {
    _status: {
      equals: 'published',
    },
  }
}
