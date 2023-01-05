import { AddressCreateService } from '../services/address/createAddressService'
import { HttpResponseAddress } from '../class/httpResponse'
import { validUf } from '../utils/validUf'
import { IAddressBody, IResponseId } from '../interfaces/IAddressBody'
import { AddressDeleteService } from '../services/address/deleteAddressService'
import { AddressListService } from '../services/address/listAllAddressService'
import { AddressListOneService } from '../services/address/listOneAddressService'
import { UpdateCreateService } from '../services/address/updateAddressService'

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
    const addressCreateService = new AddressCreateService()
    const executeAddressCreateService = await addressCreateService.execute({
      street: street.toString(),
      publicPlace: publicPlace.toString(),
      number: number.toString(),
      city: city.toString(),
      uf: uf.toString(),
      cep: cep.toString()
    })

    return new HttpResponseAddress(200, executeAddressCreateService.toString())
  }

  public async delete (httpRequest: IResponseId): Promise<HttpResponseAddress> {
    if (!httpRequest.params) {
      return new HttpResponseAddress(500, 'Internal server error')
    }

    const { id } = httpRequest.params

    if (!id) {
      return new HttpResponseAddress(400, 'Please enter id')
    }

    const addressDeleteService = new AddressDeleteService()

    const addressDeleteServiceExecute = await addressDeleteService.execute(parseInt(id + ''))

    return new HttpResponseAddress(200, 'Delete with sucess id = ' + addressDeleteServiceExecute)
  }

  public async readAll () {
    const addressListService = new AddressListService()

    const executeAddressListService = await addressListService.execute()

    return new HttpResponseAddress(200, executeAddressListService)
  }

  public async readOne (id:number | boolean) {
    if (!id) {
      return new HttpResponseAddress(400, 'Please enter id')
    }
    const addressListOneService = new AddressListOneService()

    const executeAddressListOneService = await addressListOneService.execute(parseInt(id + ''))

    return new HttpResponseAddress(200, executeAddressListOneService)
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
