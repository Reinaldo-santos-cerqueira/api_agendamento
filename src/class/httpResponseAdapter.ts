import { Request, Response } from 'express'
import { AddressControllers } from '../controllers/addressControllers'

export class HttpResponseAdapter {
  public async responseCreateAddress (request: Request, response: Response): Promise<Response> {
    const addressControllers = new AddressControllers()

    const addressControllersExec = await addressControllers.create(request)

    return response.status(addressControllersExec.status).json(addressControllersExec.message)
  }

  public async responseReadOneAddress (request: Request, response: Response): Promise<Response> {
    const addressControllers = new AddressControllers()

    const id = request.params.id

    const addressControllersExec = await addressControllers.readOne(parseInt(id))

    return response.status(addressControllersExec.status).json(addressControllersExec.message)
  }

  public async responseReadAllAddress (request: Request, response: Response): Promise<Response> {
    const addressControllers = new AddressControllers()

    const addressControllersExec = await addressControllers.readAll()

    return response.status(addressControllersExec.status).json(addressControllersExec.message)
  }

  public async responseUpdateAddress (request: Request, response: Response): Promise<Response> {
    const addressControllers = new AddressControllers()

    const addressControllersExec = await addressControllers.update(request)

    return response.status(addressControllersExec.status).json(addressControllersExec.message)
  }
}
