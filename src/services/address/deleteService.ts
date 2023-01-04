import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export class AdressDeleteService {
  public async execute (id : number) {
    await prisma.adress.delete({
      where: {
        id
      }
    })
    return id
  }
}
