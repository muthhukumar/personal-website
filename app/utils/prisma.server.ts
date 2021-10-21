import {PrismaClient} from '@prisma/client'

declare global {
  // This prevents us from making multiple connections to the db when the
  // require cache is cleared.
  // eslint-disable-next-line
  var prisma: ReturnType<typeof getClient> | undefined
}

const getClient: () => PrismaClient = () => {
  let prismaClient: PrismaClient | undefined = global.prisma

  if (!prismaClient) {
    global.prisma = new PrismaClient()
    prismaClient = global.prisma
  }

  return prismaClient
}

const prisma = getClient()

export {prisma}
