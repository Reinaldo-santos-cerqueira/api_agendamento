import { HttpResponseAddress } from '../class/httpResponse'
import { AddressControllers } from '../controllers/addressControllers'
import { IAddressBody, IResponseId } from '../interfaces/IAddressBody'

const makeSut = () => {
  const sut = new AddressControllers()
  return {
    sut
  }
}
describe('Test referent to address', () => {
  test('Shold if return 400 if no exists street',
    async () => {
      const { sut } = makeSut()

      const httpRequest: IAddressBody = {
        body: {
          street: false,
          publicPlace: 'any public place',
          number: 'any number',
          city: 'any city',
          uf: 'BA',
          cep: 'any cep'
        }
      }

      const httpResponse = await sut.create(httpRequest)
      expect(httpResponse).toEqual(new HttpResponseAddress(400, 'Please enter street'))
    }
  )
  test('Shold if return 400 if no exists public place',
    async () => {
      const { sut } = makeSut()

      const httpRequest: IAddressBody = {
        body: {
          street: 'any street',
          publicPlace: false,
          number: 'any number',
          city: 'any city',
          uf: 'BA',
          cep: 'any cep'
        }
      }

      const httpResponse = await sut.create(httpRequest)
      expect(httpResponse).toEqual(new HttpResponseAddress(400, 'Please enter public place'))
    }
  )
  test('Shold if return 400 if no exists number',
    async () => {
      const { sut } = makeSut()

      const httpRequest: IAddressBody = {
        body: {
          street: 'any street',
          publicPlace: 'any public place',
          number: false,
          city: 'any city',
          uf: 'BA',
          cep: 'any cep'
        }
      }

      const httpResponse = await sut.create(httpRequest)
      expect(httpResponse).toEqual(new HttpResponseAddress(400, 'Please enter number of address'))
    }
  )
  test('Shold if return 400 if no exists city',
    async () => {
      const { sut } = makeSut()

      const httpRequest: IAddressBody = {
        body: {
          street: 'any street',
          publicPlace: 'any public place',
          number: 'any number',
          city: false,
          uf: 'BA',
          cep: 'any cep'
        }
      }

      const httpResponse = await sut.create(httpRequest)
      expect(httpResponse).toEqual(new HttpResponseAddress(400, 'Please enter city'))
    }
  )
  test('Shold if return 400 if no exists uf',
    async () => {
      const { sut } = makeSut()

      const httpRequest: IAddressBody = {
        body: {
          street: 'any street',
          publicPlace: 'any public place',
          number: 'any number',
          city: 'any city',
          uf: false,
          cep: 'any cep'
        }
      }

      const httpResponse = await sut.create(httpRequest)
      expect(httpResponse).toEqual(new HttpResponseAddress(400, 'Please enter uf'))
    }
  )
  test('Shold if return 400 if no valid UF',
    async () => {
      const { sut } = makeSut()

      const httpRequest: IAddressBody = {
        body: {
          street: 'any street',
          publicPlace: 'any public place',
          number: 'any number',
          city: 'any city',
          uf: 'ds',
          cep: 'any cep'
        }
      }

      const httpResponse = await sut.create(httpRequest)
      expect(httpResponse).toEqual(new HttpResponseAddress(400, 'Please enter uf valid'))
    }
  )
  test('Shold if return 400 if no exists cep',
    async () => {
      const { sut } = makeSut()

      const httpRequest: IAddressBody = {
        body: {
          street: 'any street',
          publicPlace: 'any public place',
          number: 'any number',
          city: 'any city',
          uf: 'BA',
          cep: false
        }
      }

      const httpResponse = await sut.create(httpRequest)
      expect(httpResponse).toEqual(new HttpResponseAddress(400, 'Please enter cep'))
    }
  )
  test('Shold if return 200',
    async () => {
      const { sut } = makeSut()

      const httpRequest: IAddressBody = {
        body: {
          street: 'any street',
          publicPlace: 'any public place',
          number: 'any number',
          city: 'any city',
          uf: 'BA',
          cep: 'any cep'
        }
      }

      const httpResponse = await sut.create(httpRequest)
      expect(httpResponse).toEqual(new HttpResponseAddress(200, {
        street: 'any street',
        publicPlace: 'any public place',
        number: 'any number',
        city: 'any city',
        uf: 'BA',
        cep: 'any cep'
      }))
    }
  )
  test('Shold if return 500 if no exists body',
    async () => {
      const { sut } = makeSut()

      const httpRequest: any = {}

      const httpResponse = await sut.create(httpRequest)
      expect(httpResponse).toEqual(new HttpResponseAddress(500, 'Internal server error'))
    }
  )
  test('Shold if return 500 if no exists body',
    async () => {
      const { sut } = makeSut()

      const httpRequest: any = {}

      const httpResponse = await sut.delete(httpRequest)
      expect(httpResponse).toEqual(new HttpResponseAddress(500, 'Internal server error'))
    }
  )
  test('Shold if return 400 if no exists id',
    async () => {
      const { sut } = makeSut()

      const httpRequest: IResponseId = {
        params: {
          id: false
        }
      }

      const httpResponse = await sut.delete(httpRequest)
      expect(httpResponse).toEqual(new HttpResponseAddress(400, 'Please enter id'))
    }
  )
  test('Shold if return 200 if ok',
    async () => {
      const { sut } = makeSut()

      const httpRequest: IResponseId = {
        params: {
          id: 88
        }
      }

      const httpResponse = await sut.delete(httpRequest)
      expect(httpResponse).toEqual(new HttpResponseAddress(200, 'Delete with sucess id = ' + httpRequest.params.id))
    }
  )
  test('Shold if return 200 if read all ok',
    async () => {
      const { sut } = makeSut()

      const httpResponse = await sut.readAll()
      expect(httpResponse.status).toBe(200)
    }
  )
  test('Shold if return 200 if read onex ok',
    async () => {
      const { sut } = makeSut()
      const httpRequest: IResponseId = {
        params: {
          id: 1
        }
      }
      const httpResponse = await sut.readOne(httpRequest.params.id)
      expect(httpResponse.status).toBe(200)
    }
  )
  test('Shold if return 200 if read one is null',
    async () => {
      const { sut } = makeSut()
      const httpRequest: IResponseId = {
        params: {
          id: 400
        }
      }
      const httpResponse = await sut.readOne(httpRequest.params.id)
      expect(httpResponse.status).toBe(200)
      expect(httpResponse.message).toBe('Without data')
    }
  )
  test('Shold if return 400 if no exists id',
    async () => {
      const { sut } = makeSut()

      const httpRequest: number | boolean = false

      const httpResponse = await sut.readOne(httpRequest)
      expect(httpResponse).toEqual(new HttpResponseAddress(400, 'Please enter id'))
    }
  )
  test('Shold if return 400 if body no update',
    async () => {
      const { sut } = makeSut()

      const httpRequest: any = {}

      const httpResponse = await sut.update(httpRequest)
      expect(httpResponse).toEqual(new HttpResponseAddress(400, 'Without data body'))
    }
  )
  test('Shold if return 200 if update is ok',
    async () => {
      const { sut } = makeSut()

      const httpRequest: any = {
        body: {
          street: 'any street',
          publicPlace: 'any public place',
          number: 'any number',
          city: 'any city',
          uf: 'BA',
          cep: 'any cep',
          id: 3
        }
      }

      const httpResponse = await sut.update(httpRequest)
      expect(httpResponse).toEqual(new HttpResponseAddress(200, {
        street: 'any street',
        publicPlace: 'any public place',
        number: 'any number',
        city: 'any city',
        uf: 'BA',
        cep: 'any cep'
      }))
    }
  )
  test('Shold if return 400 if no exists street',
    async () => {
      const { sut } = makeSut()

      const httpRequest: IAddressBody = {
        body: {
          street: false,
          publicPlace: 'any public place',
          number: 'any number',
          city: 'any city',
          uf: 'BA',
          cep: 'any cep'
        }
      }

      const httpResponse = await sut.update(httpRequest)
      expect(httpResponse).toEqual(new HttpResponseAddress(400, 'Please enter street'))
    }
  )
  test('Shold if return 400 if no exists public place',
    async () => {
      const { sut } = makeSut()

      const httpRequest: IAddressBody = {
        body: {
          street: 'any street',
          publicPlace: false,
          number: 'any number',
          city: 'any city',
          uf: 'BA',
          cep: 'any cep'
        }
      }

      const httpResponse = await sut.update(httpRequest)
      expect(httpResponse).toEqual(new HttpResponseAddress(400, 'Please enter public place'))
    }
  )
  test('Shold if return 400 if no exists number',
    async () => {
      const { sut } = makeSut()

      const httpRequest: IAddressBody = {
        body: {
          street: 'any street',
          publicPlace: 'any public place',
          number: false,
          city: 'any city',
          uf: 'BA',
          cep: 'any cep'
        }
      }

      const httpResponse = await sut.update(httpRequest)
      expect(httpResponse).toEqual(new HttpResponseAddress(400, 'Please enter number of address'))
    }
  )
  test('Shold if return 400 if no exists city',
    async () => {
      const { sut } = makeSut()

      const httpRequest: IAddressBody = {
        body: {
          street: 'any street',
          publicPlace: 'any public place',
          number: 'any number',
          city: false,
          uf: 'BA',
          cep: 'any cep'
        }
      }

      const httpResponse = await sut.update(httpRequest)
      expect(httpResponse).toEqual(new HttpResponseAddress(400, 'Please enter city'))
    }
  )
  test('Shold if return 400 if no exists uf',
    async () => {
      const { sut } = makeSut()

      const httpRequest: IAddressBody = {
        body: {
          street: 'any street',
          publicPlace: 'any public place',
          number: 'any number',
          city: 'any city',
          uf: false,
          cep: 'any cep'
        }
      }

      const httpResponse = await sut.update(httpRequest)
      expect(httpResponse).toEqual(new HttpResponseAddress(400, 'Please enter uf'))
    }
  )
  test('Shold if return 400 if no valid UF',
    async () => {
      const { sut } = makeSut()

      const httpRequest: IAddressBody = {
        body: {
          street: 'any street',
          publicPlace: 'any public place',
          number: 'any number',
          city: 'any city',
          uf: 'ds',
          cep: 'any cep'
        }
      }

      const httpResponse = await sut.update(httpRequest)
      expect(httpResponse).toEqual(new HttpResponseAddress(400, 'Please enter uf valid'))
    }
  )
  test('Shold if return 400 if no exists cep',
    async () => {
      const { sut } = makeSut()

      const httpRequest: IAddressBody = {
        body: {
          street: 'any street',
          publicPlace: 'any public place',
          number: 'any number',
          city: 'any city',
          uf: 'BA',
          cep: false
        }
      }

      const httpResponse = await sut.update(httpRequest)
      expect(httpResponse).toEqual(new HttpResponseAddress(400, 'Please enter cep'))
    }
  )
})
