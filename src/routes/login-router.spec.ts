import { AppError, SucessRequest } from '../helpers/classResponse'
import validEmail from '../utils/validEmail'
import validPassword from '../utils/validPassword'
import { LoginRouter } from './login.routes'

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
      expect(httpResponse.body).toEqual(new AppError('Missing email'))
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
      expect(httpResponse.body).toEqual(new AppError('Missing password'))
    }
  })

  test('Shold return 400 if password this is weak or medium is provided', () => {
    const sut = new LoginRouter()
    const httpRequest: any = {
      body: {
        email: 'any_email@gmail.com',
        password: '12345678901'
      }
    }
    const httpResponse = sut.route(httpRequest)
    if (httpResponse) {
      expect(httpResponse.statusCode).toBe(400)
      expect(httpResponse.body).toEqual(new AppError('Password should be strong'))
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
      expect(httpResponse.body).toEqual(new AppError('Email should be valid'))
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
      expect(httpResponse.body).toEqual(new SucessRequest('Sucess'))
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
