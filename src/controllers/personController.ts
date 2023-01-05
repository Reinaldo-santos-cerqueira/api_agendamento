import { HttpResponsePerson } from '../class/httpResponse'
import { IBodyTradePassword, IPersonBody, IloginBody } from '../interfaces'
import { CreatePersonService } from '../services/person/createPersonServices'
import { PersonLoginService } from '../services/person/loginPersonServices'
import { UpdatePasswordPersonService } from '../services/person/updatePasswordPersonService'
import validEmail from '../utils/validEmail'
export class PersonController {
  public async create (httpRequest: IPersonBody) {
    if (!httpRequest.body) {
      return new HttpResponsePerson(500, 'Internal server error')
    }
    const {
      name,
      cpf,
      profession,
      password,
      email,
      phone,
      type,
      addressId
    } = httpRequest.body

    if (!name) {
      return new HttpResponsePerson(400, 'Please enter name')
    } else if (!cpf) {
      return new HttpResponsePerson(400, 'Please enter cpf')
    } else if (!profession) {
      return new HttpResponsePerson(400, 'Please enter profession')
    } else if (!password) {
      return new HttpResponsePerson(400, 'Please enter password')
    } else if (!email) {
      return new HttpResponsePerson(400, 'Please enter email')
    } else if (!validEmail(email.toString())) {
      return new HttpResponsePerson(400, 'Email is not valid')
    } else if (!phone) {
      return new HttpResponsePerson(400, 'Please enter phone')
    } else if (!type) {
      return new HttpResponsePerson(400, 'Please enter type')
    } else if (!addressId) {
      return new HttpResponsePerson(400, 'Please enter addressId')
    }
    const createPersonService = new CreatePersonService()
    let clientCollaborator: 'Client' | 'Collaborator'
    if (type === 'Client') {
      clientCollaborator = 'Client'
    } else {
      clientCollaborator = 'Collaborator'
    }
    const createPersonServiceExec = await createPersonService.execute({
      name: name.toString(),
      cpf: cpf.toString(),
      profession: profession.toString(),
      password: password.toString(),
      email: email.toString(),
      phone: phone.toString(),
      type: clientCollaborator,
      addressId: parseInt(addressId + '')
    })

    if (createPersonServiceExec === 'Email já cadastrado') {
      return new HttpResponsePerson(400, createPersonServiceExec.toString())
    }

    return new HttpResponsePerson(200, createPersonServiceExec.toString())
  }

  public async update (httpRequest: IBodyTradePassword) {
    if (!httpRequest.body) {
      return new HttpResponsePerson(500, 'Internal server error')
    }
    const {
      id,
      password
    } = httpRequest.body

    if (!id) {
      return new HttpResponsePerson(400, 'Please enter id')
    } else if (!password) {
      return new HttpResponsePerson(400, 'Please enter password')
    }
    const updatePasswordPersonService = new UpdatePasswordPersonService()

    await updatePasswordPersonService.execute(
      {
        id: parseInt(id + ''),
        password: password.toString()
      }
    )
    return new HttpResponsePerson(200, 'Senha trocada com sucesso')
  }

  public async login (httpRequest: IloginBody) {
    const personLoginService = new PersonLoginService()
    if (!httpRequest.body) {
      return new HttpResponsePerson(500, 'Internal server error')
    }
    const {
      email,
      password
    } = httpRequest.body
    if (!password) {
      return new HttpResponsePerson(400, 'Please enter password')
    } else if (!email) {
      return new HttpResponsePerson(400, 'Please enter email')
    }
    const personLoginServiceExec = await personLoginService.execute(email.toString(), password.toString())

    if (personLoginServiceExec === 'Password is incorrect') {
      return new HttpResponsePerson(400, personLoginServiceExec.toString())
    }

    if (personLoginServiceExec === 'Not exists user with email') {
      return new HttpResponsePerson(400, personLoginServiceExec.toString())
    }

    return new HttpResponsePerson(200, personLoginServiceExec.toString())
  }
}
