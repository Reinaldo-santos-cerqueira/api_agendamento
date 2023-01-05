import { PrismaClient } from '@prisma/client'
import { IAddress } from '../../interfaces'
import { Address } from '../../class/addressClass'
const prisma = new PrismaClient()

export class AddressCreateService {
  public async execute (
    {
      street,
      publicPlace,
      number,
      city,
      uf,
      cep
    }: IAddress
  ) {
    const address = await prisma.address.create({
      data: {
        street,
        publicPlace,
        number,
        city,
        uf,
        cep
      }
    })
    return address.id
  }
}
