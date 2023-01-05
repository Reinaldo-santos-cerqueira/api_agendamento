import { PrismaClient } from '@prisma/client'
import { Address } from '../../class/addressClass'
const prisma = new PrismaClient()

export class AddressListService {
  public async execute (): Promise<Address[]> {
    const address = await prisma.address.findMany({
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
