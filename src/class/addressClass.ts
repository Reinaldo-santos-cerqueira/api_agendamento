export class Address {
  street: string
  publicPlace: string
  number: string
  city: string
  uf: string
  cep: string
  constructor (street: string, publicPlace: string, number: string, city: string, uf: string, cep: string) {
    this.street = street
    this.publicPlace = publicPlace
    this.number = number
    this.city = city
    this.uf = uf
    this.cep = cep
  }
}
