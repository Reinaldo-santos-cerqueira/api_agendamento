import { PrismaClient } from '@prisma/client'
import { Address } from '../../class/addressClass'
const prisma = new PrismaClient()

export class AdressListService {
  public async execute (): Promise<Address[]> {
    const address = await prisma.adress.findMany({
      select: {
        street: true,
        publicPlace: true,
        number: true,
        city: true,
        uf: true,
        cep: true
      }
    })

    return address
  }
}
