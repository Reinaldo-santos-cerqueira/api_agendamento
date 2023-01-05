import { PrismaClient } from '@prisma/client'
import { Person } from '../../class/personClass'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
dotenv.config()
const prisma = new PrismaClient()
export class PersonLoginService {
  public async execute (email: string, password: string): Promise<Person | string> {
    const person = await prisma.person.findFirst({
      where: {
        email
      },
      select: {
        email: true,
        password: true
      }
    })
    if (person) {
      const email = person.email
      const comparePassword = await bcrypt.compare(password, person.password)
      if (!comparePassword) {
        return 'Password is incorrect'
      }
      const Tokenuuid = process.env.TOKEN_SECRET_REFRESH + ''
      const refreshToken = jwt.sign(
        {
          email
        },
        Tokenuuid,
        {
          expiresIn: '2h'
        }
      )
      return refreshToken
    } else {
      return 'Not exists user with email'
    }
  }
}
