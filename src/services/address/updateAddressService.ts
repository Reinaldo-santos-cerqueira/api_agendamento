import { PrismaClient } from '@prisma/client'
import { IAddress } from '../../interfaces'
import { Address } from '../../class/addressClass'
const prisma = new PrismaClient()

export class UpdateCreateService {
  public async execute (
    {
      street,
      publicPlace,
      number,
      city,
      uf,
      cep,
      id
    }: IAddress
  ): Promise<Address> {
    const address = await prisma.address.update({
      where: {
        id
      },
      data: {
        street,
        publicPlace,
        number,
        city,
        uf,
        cep,
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
    return address
  }
}
