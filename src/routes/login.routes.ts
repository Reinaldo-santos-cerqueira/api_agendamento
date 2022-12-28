import { HttpResponse } from '../helpers/httpResponse'
import validEmail from '../utils/validEmail'
import validPassword from '../utils/validPassword'

export class LoginRouter {
  route (httpRequest: any) {
    if (!httpRequest || !httpRequest.body) {
      return HttpResponse.unexpectedRequest('Server error')
    }
    const { email, password } = httpRequest.body
    if (!email) {
      return HttpResponse.badRequest('Missing email')
    } else if (!password) {
      return HttpResponse.badRequest('Missing password')
    } else if (!validPassword(password)) {
      return HttpResponse.badRequest('Password should be strong')
    } else if (!validEmail(email)) {
      return HttpResponse.badRequest('Email should be valid')
    }
    // return HttpResponse.successRequest('Sucess')
  }
}
