import { PrismaClient } from '@prisma/client'
import { Address } from '../../class/addressClass'
const prisma = new PrismaClient()

export class AddressListOneService {
  public async execute (id:number): Promise<Address|string> {
    const address = await prisma.address.findFirst({
      where: {
        id
      },
      select: {
        street: true,
        publicPlace: true,
        number: true,
        city: true,
        uf: true,
        cep: true
      }
    })
    if (address) {
      return address
    } else {
      return 'Without data'
    }
  }
}
