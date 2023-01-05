import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export class AddressDeleteService {
  public async execute (id : number) {
    await prisma.address.delete({
      where: {
        id
      }
    })
    return id
  }
}
