import { Address } from '../class/addressClass'
import { AdressCreateService } from '../services/address/createService'
import { HttpResponseAddress } from '../class/httpResponse'
import { validUf } from '../utils/validUf'
import { IAddressBody, IResponseId } from '../interfaces/IAddressBody'
import { AdressDeleteService } from '../services/address/deleteService'
import { AdressListService } from '../services/address/listAllService'
import { AdressListOneService } from '../services/address/listOneService'
import { UpdateCreateService } from '../services/address/updateService'

export class AddressControllers {
  public async create (httpRequest: IAddressBody): Promise<HttpResponseAddress> {
    if (!httpRequest.body) {
      return new HttpResponseAddress(500, 'Internal server error')
    }
    const {
      street,
      publicPlace,
      number,
      city,
      uf,
      cep
    } = httpRequest.body

    if (!street) {
      return new HttpResponseAddress(400, 'Please enter street')
    } else if (!publicPlace) {
      return new HttpResponseAddress(400, 'Please enter public place')
    } else if (!number) {
      return new HttpResponseAddress(400, 'Please enter number of address')
    } else if (!city) {
      return new HttpResponseAddress(400, 'Please enter city')
    } else if (!uf) {
      return new HttpResponseAddress(400, 'Please enter uf')
    } else if (!cep) {
      return new HttpResponseAddress(400, 'Please enter cep')
    } else if (!validUf(uf + '')) {
      return new HttpResponseAddress(400, 'Please enter uf valid')
    }
    const adressCreateService = new AdressCreateService()
    const executeAdressCreateService = await adressCreateService.execute({
      street: street.toString(),
      publicPlace: publicPlace.toString(),
      number: number.toString(),
      city: city.toString(),
      uf: uf.toString(),
      cep: cep.toString()
    })

    return new HttpResponseAddress(200, {
      street: executeAdressCreateService.street,
      publicPlace: executeAdressCreateService.publicPlace,
      number: executeAdressCreateService.number,
      city: executeAdressCreateService.city,
      uf: executeAdressCreateService.uf,
      cep: executeAdressCreateService.cep
    })
  }

  public async delete (httpRequest: IResponseId): Promise<HttpResponseAddress> {
    if (!httpRequest.params) {
      return new HttpResponseAddress(500, 'Internal server error')
    }

    const { id } = httpRequest.params

    if (!id) {
      return new HttpResponseAddress(400, 'Please enter id')
    }

    const adressDeleteService = new AdressDeleteService()

    const adressDeleteServiceExecute = await adressDeleteService.execute(parseInt(id + ''))

    return new HttpResponseAddress(200, 'Delete with sucess id = ' + adressDeleteServiceExecute)
  }

  public async readAll () {
    const adressListService = new AdressListService()

    const executeAdressListService = await adressListService.execute()

    return new HttpResponseAddress(200, executeAdressListService)
  }

  public async readOne (id:number | boolean) {
    if (!id) {
      return new HttpResponseAddress(400, 'Please enter id')
    }
    const adressListOneService = new AdressListOneService()

    const executeAdressListOneService = await adressListOneService.execute(parseInt(id + ''))

    return new HttpResponseAddress(200, executeAdressListOneService)
  }

  public async update (httpRequest: IAddressBody): Promise<HttpResponseAddress> {
    if (!httpRequest.body) {
      return new HttpResponseAddress(400, 'Without data body')
    }
    const {
      street,
      publicPlace,
      number,
      city,
      uf,
      cep,
      id
    } = httpRequest.body

    const updateService = new UpdateCreateService()
    if (!street) {
      return new HttpResponseAddress(400, 'Please enter street')
    } else if (!publicPlace) {
      return new HttpResponseAddress(400, 'Please enter public place')
    } else if (!number) {
      return new HttpResponseAddress(400, 'Please enter number of address')
    } else if (!city) {
      return new HttpResponseAddress(400, 'Please enter city')
    } else if (!uf) {
      return new HttpResponseAddress(400, 'Please enter uf')
    } else if (!cep) {
      return new HttpResponseAddress(400, 'Please enter cep')
    } else if (!validUf(uf + '')) {
      return new HttpResponseAddress(400, 'Please enter uf valid')
    }
    const executeUpdateService = await updateService.execute({
      street: street.toString(),
      publicPlace: publicPlace.toString(),
      number: number.toString(),
      city: city.toString(),
      uf: uf.toString(),
      cep: cep.toString(),
      id
    })

    return new HttpResponseAddress(200, {
      street: executeUpdateService.street,
      publicPlace: executeUpdateService.publicPlace,
      number: executeUpdateService.number,
      city: executeUpdateService.city,
      uf: executeUpdateService.uf,
      cep: executeUpdateService.cep
    })
  }
}
