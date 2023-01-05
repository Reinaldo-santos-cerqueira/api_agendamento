import { Person, PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
const prisma = new PrismaClient()

interface IPerson {
    password: string
    id?:number
}

export class UpdatePasswordPersonService {
  public async execute (
    {
      password,
      id
    }: IPerson
  ): Promise<Person> {
    const saltRounds = 2
    const passwordHash = await bcrypt.hash(password, saltRounds)
    const person = await prisma.person.update({
      where: {
        id
      },
      data: {
        password: passwordHash
      }
    })

    return person
  }
}
