/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpResponsePerson } from '../class/httpResponse'
import { PersonController } from '../controllers/personController'
import { IBodyLogin, IBodyTradePassword, IPersonBody } from '../interfaces'

const makeSut = () => {
  const sut = new PersonController()
  return {
    sut
  }
}

describe('Test referent to person', () => {
  test('Should retrurn 500 if body is provided', async () => {
    const { sut } = makeSut()

    const httpRequest: any = {}

    const httpResponse = await sut.create(httpRequest)

    expect(httpResponse).toEqual(new HttpResponsePerson(500, 'Internal server error'))
  })
  test('Should retrurn 400 if name is provided', async () => {
    const { sut } = makeSut()

    const httpRequest: IPersonBody = {
      body: {
        name: false,
        cpf: 'any cpf',
        profession: 'any profession',
        password: 'any password',
        email: 'any_email@email.com',
        phone: 'any phone',
        type: 'Client',
        addressId: 1
      }
    }

    const httpResponse = await sut.create(httpRequest)

    expect(httpResponse).toEqual(new HttpResponsePerson(400, 'Please enter name'))
  })
  test('Should retrurn 400 if cpf is provided', async () => {
    const { sut } = makeSut()

    const httpRequest: IPersonBody = {
      body: {
        name: 'any name',
        cpf: false,
        profession: 'any profession',
        password: 'any password',
        email: 'any_email@email.com',
        phone: 'any phone',
        type: 'Client',
        addressId: 1
      }
    }

    const httpResponse = await sut.create(httpRequest)

    expect(httpResponse).toEqual(new HttpResponsePerson(400, 'Please enter cpf'))
  })
  test('Should retrurn 400 if profession is provided', async () => {
    const { sut } = makeSut()

    const httpRequest: IPersonBody = {
      body: {
        name: 'any name',
        cpf: 'any cpf',
        profession: false,
        password: 'any password',
        email: 'any_email@email.com',
        phone: 'any phone',
        type: 'Client',
        addressId: 1
      }
    }

    const httpResponse = await sut.create(httpRequest)

    expect(httpResponse).toEqual(new HttpResponsePerson(400, 'Please enter profession'))
  })
  test('Should retrurn 400 if password is provided', async () => {
    const { sut } = makeSut()

    const httpRequest: IPersonBody = {
      body: {
        name: 'any name',
        cpf: 'any cpf',
        profession: 'any profession',
        password: false,
        email: 'any_email@email.com',
        phone: 'any phone',
        type: 'Client',
        addressId: 1
      }
    }

    const httpResponse = await sut.create(httpRequest)

    expect(httpResponse).toEqual(new HttpResponsePerson(400, 'Please enter password'))
  })
  test('Should retrurn 400 if email is provided', async () => {
    const { sut } = makeSut()

    const httpRequest: IPersonBody = {
      body: {
        name: 'any name',
        cpf: 'any cpf',
        profession: 'any profession',
        password: 'any password',
        email: false,
        phone: 'any phone',
        type: 'Client',
        addressId: 1
      }
    }

    const httpResponse = await sut.create(httpRequest)

    expect(httpResponse).toEqual(new HttpResponsePerson(400, 'Please enter email'))
  })
  test('Should retrurn 400 if phone is provided', async () => {
    const { sut } = makeSut()

    const httpRequest: IPersonBody = {
      body: {
        name: 'any name',
        cpf: 'any cpf',
        profession: 'any profession',
        password: 'any password',
        email: 'any_email@434354.com',
        phone: false,
        type: 'Client',
        addressId: 1
      }
    }

    const httpResponse = await sut.create(httpRequest)

    expect(httpResponse).toEqual(new HttpResponsePerson(400, 'Please enter phone'))
  })
  test('Should retrurn 400 if type is provided', async () => {
    const { sut } = makeSut()

    const httpRequest: IPersonBody = {
      body: {
        name: 'any name',
        cpf: 'any cpf',
        profession: 'any profession',
        password: 'any password',
        email: 'any_email@email.com',
        phone: 'any phone',
        type: false,
        addressId: 1
      }
    }

    const httpResponse = await sut.create(httpRequest)

    expect(httpResponse).toEqual(new HttpResponsePerson(400, 'Please enter type'))
  })
  test('Should retrurn 400 if address is provided', async () => {
    const { sut } = makeSut()

    const httpRequest: IPersonBody = {
      body: {
        name: 'any name',
        cpf: 'any cpf',
        profession: 'any profession',
        password: 'any password',
        email: 'any_email@asda.com',
        phone: 'any phone',
        type: 'Client',
        addressId: false
      }
    }

    const httpResponse = await sut.create(httpRequest)

    expect(httpResponse).toEqual(new HttpResponsePerson(400, 'Please enter addressId'))
  })

  test('Should retrurn 200 if ok all params', async () => {
    const { sut } = makeSut()

    const httpRequest: IPersonBody = {
      body: {
        name: 'any name',
        cpf: 'any cpf',
        profession: 'any profession',
        password: 'any password',
        email: 'any_email@54675.com',
        phone: 'any phone',
        type: 'Client',
        addressId: 1
      }
    }

    const httpResponse = await sut.create(httpRequest)

    expect(httpResponse.status).toBe(200)
  })
  test('Should retrurn 400 if email is already', async () => {
    const { sut } = makeSut()

    const httpRequest: IPersonBody = {
      body: {
        name: 'any name',
        cpf: 'any cpf',
        profession: 'any profession',
        password: 'any password',
        email: 'any_email@email14356.com',
        phone: 'any phone',
        type: 'Client',
        addressId: 1
      }
    }

    const httpResponse = await sut.create(httpRequest)

    expect(httpResponse).toEqual(new HttpResponsePerson(400, 'Email já cadastrado'))
  })
  test('Should retrurn 400 if email is not  valid', async () => {
    const { sut } = makeSut()

    const httpRequest: IPersonBody = {
      body: {
        name: 'any name',
        cpf: 'any cpf',
        profession: 'any profession',
        password: 'any password',
        email: 'any_email',
        phone: 'any phone',
        type: 'Client',
        addressId: 1
      }
    }

    const httpResponse = await sut.create(httpRequest)

    expect(httpResponse).toEqual(new HttpResponsePerson(400, 'Email is not valid'))
  })
  test('Should retrurn 200 if password and id ok', async () => {
    const { sut } = makeSut()

    const httpRequest: IBodyTradePassword = {
      body: {
        password: 'any password',
        id: 16
      }
    }

    const httpResponse = await sut.update(httpRequest)

    expect(httpResponse).toEqual(new HttpResponsePerson(200, 'Senha trocada com sucesso'))
  })
  test('Should retrurn 400 if id no provided', async () => {
    const { sut } = makeSut()

    const httpRequest: IBodyTradePassword = {
      body: {
        password: 'any password',
        id: false
      }
    }

    const httpResponse = await sut.update(httpRequest)

    expect(httpResponse).toEqual(new HttpResponsePerson(400, 'Please enter id'))
  })
  test('Should retrurn 400 if password is provided', async () => {
    const { sut } = makeSut()

    const httpRequest: IBodyTradePassword = {
      body: {
        password: false,
        id: 16
      }
    }

    const httpResponse = await sut.update(httpRequest)

    expect(httpResponse).toEqual(new HttpResponsePerson(400, 'Please enter password'))
  })
  test('Should retrurn 500 if body is provided', async () => {
    const { sut } = makeSut()

    const httpRequest: any = {}

    const httpResponse = await sut.update(httpRequest)

    expect(httpResponse).toEqual(new HttpResponsePerson(500, 'Internal server error'))
  })

  test('Should retrurn 200 if password and email is ok', async () => {
    const { sut } = makeSut()

    const httpRequest: IBodyLogin = {
      body: {
        password: 'any password',
        email: 'any_email@email14356.com'
      }
    }

    const httpResponse = await sut.login(httpRequest)

    expect(httpResponse.status).toBe(200)
  })
  test('Should retrurn 400 if password no provided', async () => {
    const { sut } = makeSut()

    const httpRequest: IBodyLogin = {
      body: {
        password: false,
        email: 'any_email@email14356.com'
      }
    }

    const httpResponse = await sut.login(httpRequest)

    expect(httpResponse).toEqual(new HttpResponsePerson(400, 'Please enter password'))
  })
  test('Should retrurn 400 if email no provided', async () => {
    const { sut } = makeSut()

    const httpRequest: IBodyLogin = {
      body: {
        password: 'any password',
        email: false
      }
    }

    const httpResponse = await sut.login(httpRequest)

    expect(httpResponse).toEqual(new HttpResponsePerson(400, 'Please enter email'))
  })

  test('Should retrurn 400 if email no exists', async () => {
    const { sut } = makeSut()

    const httpRequest: IBodyLogin = {
      body: {
        password: 'any password',
        email: 'any@emailfgrefrerfdw.com'
      }
    }

    const httpResponse = await sut.login(httpRequest)

    expect(httpResponse).toEqual(new HttpResponsePerson(400, 'Not exists user with email'))
  })

  test('Should retrurn 400 if password is incorrect', async () => {
    const { sut } = makeSut()

    const httpRequest: IBodyLogin = {
      body: {
        password: 'ateyertuyhr tyhn 46t',
        email: 'any_email@email14356.com'
      }
    }

    const httpResponse = await sut.login(httpRequest)

    expect(httpResponse).toEqual(new HttpResponsePerson(400, 'Password is incorrect'))
  })

  test('Should retrurn 400 if body no exist', async () => {
    const { sut } = makeSut()

    const httpRequest: any = {}

    const httpResponse = await sut.login(httpRequest)

    expect(httpResponse).toEqual(new HttpResponsePerson(500, 'Internal server error'))
  })
})
