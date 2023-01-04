import { HttpResponsePerson } from '../class/httpResponse'
import { IPersonBody } from '../interfaces'

export class PersonController {
  public async create (httpRequest: IPersonBody) {
    if (!httpRequest) {
      return new HttpResponsePerson(500, 'Internal server error')
    }
  }
}
