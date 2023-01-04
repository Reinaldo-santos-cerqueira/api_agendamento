import { IAddress, IPerson, IResponseBody } from '../interfaces'
import { Address } from './addressClass'
import { Person } from './personClass'

export class HttpResponseAddress {
  status: number
  message: string | IAddress | Address[] | Address
  constructor (status: number, message: string | IAddress | Address[] | Address) {
    this.status = status
    this.message = message
  }
}

export class HttpResponsePerson {
  status: number
  message: string | IPerson | Person[] | Person
  constructor (status: number, message: string | IPerson | Person[] | Person) {
    this.status = status
    this.message = message
  }
}
