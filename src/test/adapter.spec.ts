import app from '../server'
import { HttpResponseAdapter } from '../class/httpResponseAdapter'
import request from 'supertest'

describe('Test referent to adapter', () => {
  it('Shold return response.status 200',
    async () => {
      const response = await request(app).post('/v1/address').send({
        street: 'Rua da roma',
        publicPlace: '3° predio azul',
        number: '229',
        city: 'Salvador',
        uf: 'BA',
        cep: '41205235'
      })
      expect(response.status).toBe(200)
      expect(response.body).toEqual({
        street: 'Rua da roma',
        publicPlace: '3° predio azul',
        number: '229',
        city: 'Salvador',
        uf: 'BA',
        cep: '41205235'
      })
    })
  it('Shold return response.status 200',
    async () => {
      const response = await request(app).get('/v1/address/136')
      expect(response.status).toBe(200)
      expect(response.body).toEqual({
        street: 'Rua da roma',
        publicPlace: '3° predio azul',
        number: '229',
        city: 'Salvador',
        uf: 'BA',
        cep: '41205235'
      })
    })
  it('Shold return response.status 200',
    async () => {
      const response = await request(app).get('/v1/address')
      expect(response.status).toBe(200)
    })
  it('Shold return response.status 200',
    async () => {
      const response = await request(app).put('/v1/address').send({
        street: 'Rua da roma',
        publicPlace: '3° predio azul',
        number: '229',
        city: 'Salvador',
        uf: 'BA',
        cep: '41205235',
        id: 136
      })
      expect(response.status).toBe(200)
      expect(response.body).toEqual({
        street: 'Rua da roma',
        publicPlace: '3° predio azul',
        number: '229',
        city: 'Salvador',
        uf: 'BA',
        cep: '41205235'
      })
    })
})
