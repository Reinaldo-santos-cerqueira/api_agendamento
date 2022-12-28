import { AppError, SucessRequest } from './classResponse'

export class HttpResponse {
  static badRequest (message: string) {
    return {
      statusCode: 400,
      body: new AppError(message)
    }
  }

  static successRequest (message: string) {
    return {
      statusCode: 200,
      body: message
    }
  }

  static unexpectedRequest (message: string) {
    return {
      statusCode: 500,
      body: new SucessRequest(message)
    }
  }
}
