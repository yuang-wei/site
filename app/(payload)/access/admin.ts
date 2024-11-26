import type { Access } from 'payload'

export const admin: Access = ({ req: { user } }) => {
  if (user) {
    return true
  }

  return {
    role: {
      equals: 'admin',
    },
  }
}
