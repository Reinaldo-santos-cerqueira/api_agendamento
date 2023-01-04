import { PrismaClient } from '@prisma/client'
import { IAddress } from '../../interfaces'
import { Address } from '../../class/addressClass'
const prisma = new PrismaClient()

export class AdressCreateService {
  public async execute (
    {
      street,
      publicPlace,
      number,
      city,
      uf,
      cep
    }: IAddress
  ): Promise<Address> {
    const address = await prisma.adress.create({
      data: {
        street,
        publicPlace,
        number,
        city,
        uf,
        cep
      }
    })
    return address
  }
}
