export class AppError extends Error {
  public readonly message: string
  public readonly statusCode: number
  public readonly erro: boolean

  constructor (message: string, statusCode = 400) {
    super()
    this.message = message
    this.statusCode = statusCode
    this.erro = true
  }
}

export class SucessRequest {
  public readonly message: string
  public readonly statusCode: number
  public readonly jwt: string

  constructor (message: string, statusCode = 400) {
    this.message = message
    this.statusCode = statusCode
    this.jwt = 'gelrtkhg0dfnjbd0iurtnjgh90uerhgnes'
  }
}
