import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
const prisma = new PrismaClient()

interface IPerson {
  name: string
  cpf: string
  profession: string
  password: string
  email: string
  phone: string
  type: 'Client' | 'Collaborator'
  addressId: number
}

export class CreatePersonService {
  public async execute (
    {
      name,
      cpf,
      profession,
      password,
      email,
      phone,
      type,
      addressId
    }: IPerson
  ): Promise<number | string> {
    const personExists = await prisma.person.findFirst({
      where: {
        email
      }
    })
    if (personExists) {
      return 'Email já cadastrado'
    }
    const saltRounds = 2
    const passwordHash = await bcrypt.hash(password, saltRounds)
    const person = await prisma.person.create({
      data: {
        name,
        cpf,
        profession,
        password: passwordHash,
        email,
        phone,
        type,
        addressId
      }
    })

    return person.id
  }
}
