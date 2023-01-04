export class Person {
  name: string
  cpf: string
  profession: string
  password: string
  email: string
  phone: string
  type: 'Client' | 'Collaborator'
  adressId: number
  constructor (name: string, cpf: string, profession: string, password: string, email: string, phone: string, type: 'Client' | 'Collaborator', adressId: number) {
    this.name = name
    this.cpf = cpf
    this.profession = profession
    this.password = password
    this.email = email
    this.phone = phone
    this.type = type
    this.adressId = adressId
  }
}
