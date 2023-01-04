import { PersonController } from '../controllers/personController'

const makeSut = () => {
  const sut = new PersonController()
  return {
    sut
  }
}
