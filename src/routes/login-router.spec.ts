import validEmail from '../utils/validEmail'
import validPassword from '../utils/validPassword'

/* eslint-disable @typescript-eslint/no-explicit-any */
class LoginRouter {
  route (httpRequest: any) {
    if (!httpRequest || !httpRequest.body) {
      return {
        statusCode: 500,
        message: ' httpRequest no have body '
      }
    }
    const { email, password } = httpRequest.body
    if (!email) {
      return {
        statusCode: 400,
        message: 'Please enter a email'
      }
    } else if (!password) {
      return {
        statusCode: 400,
        message: 'Please enter a password'
      }
    } else if (password.length <= 10) {
      return {
        statusCode: 400,
        message: 'Please enter a 10 character password'

      }
    } else if (!validPassword(password)) {
      return {
        statusCode: 400,
        message: 'Password must have uppercase and lowercase letter, number and special character'
      }
    } else if (!validEmail(email)) {
      return {
        statusCode: 400,
        message: 'Please enter a valid email'

      }
    }
    return {
      statusCode: 200,
      message: 'Logged'
    }
  }
}
describe('Login router', () => {
  test('Shold return 400 if no email is provided', () => {
    const sut = new LoginRouter()
    const httpRequest: any = {
      body: {
        password: 'any_password'
      }
    }
    const httpResponse = sut.route(httpRequest)
    if (httpResponse) {
      expect(httpResponse.statusCode).toBe(400)
      expect(httpResponse.message).toBe('Please enter a email')
    }
  })
  test('Shold return 400 if no password is provided', () => {
    const sut = new LoginRouter()
    const httpRequest:any = {
      body: {
        email: 'any_email'
      }
    }
    const httpResponse = sut.route(httpRequest)
    if (httpResponse) {
      expect(httpResponse.statusCode).toBe(400)
      expect(httpResponse.message).toBe('Please enter a password')
    }
  })
  test('Shold return 400 if password length lower 10 is provided', () => {
    const sut = new LoginRouter()
    const httpRequest: any = {
      body: {
        email: 'any_email',
        password: '123'
      }
    }
    const httpResponse = sut.route(httpRequest)
    if (httpResponse) {
      expect(httpResponse.statusCode).toBe(400)
    }
  })
  test('Shold return 400 if password this is weak or medium is provided', () => {
    const sut = new LoginRouter()
    const httpRequest: any = {
      body: {
        email: 'any_email',
        password: '12345678901'
      }
    }
    const httpResponse = sut.route(httpRequest)
    if (httpResponse) {
      expect(httpResponse.statusCode).toBe(400)
    }
  })
  test('Shold return 400 if email is not validator', () => {
    const sut = new LoginRouter()
    const httpRequest: any = {
      body: {
        email: 'any_email',
        password: 'sgn@123@123S'
      }
    }
    const httpResponse = sut.route(httpRequest)
    if (httpResponse) {
      expect(httpResponse.statusCode).toBe(400)
    }
  })
  test('Shold return 200 if email is valid and password is valid', () => {
    const sut = new LoginRouter()
    const httpRequest: any = {
      body: {
        email: 'any_email@sgnsistemas.com.br',
        password: 'sgn@123@123S'
      }
    }
    const httpResponse = sut.route(httpRequest)
    if (httpResponse) {
      expect(httpResponse.statusCode).toBe(200)
      expect(httpResponse.message).toBe('Logged')
    }
  })
  test('Shold return 500 if no have body', () => {
    const sut = new LoginRouter()
    const httpResponse = sut.route({})
    if (httpResponse) {
      expect(httpResponse.statusCode).toBe(500)
    }
  })
})
