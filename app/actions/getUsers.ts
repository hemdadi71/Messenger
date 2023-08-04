import getSession from './getSession'
import prisma from '@/app/libs/prismadb'
const getUsers = async () => {
  const session = await getSession()
  if (!session?.user?.email) {
    return []
  }
  try {
    const user = await prisma.user.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      where: {
        NOT: {
          email: session.user.email,
        },
      },
    })
    return user
  } catch (error: any) {
    return []
  }
}
export default getUsers
