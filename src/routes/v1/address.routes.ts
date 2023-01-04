import express from 'express'
import { HttpResponseAdapter } from '../../class/httpResponseAdapter'
export const RouterAddress = express.Router()

const httpResponseAdapter = new HttpResponseAdapter()

const httpResponseAdapterCreateAddress = httpResponseAdapter.responseCreateAddress
const httpResponseAdapterReadOneAddress = httpResponseAdapter.responseReadOneAddress
const httpResponseAdapterReadAllAddress = httpResponseAdapter.responseReadAllAddress
const httpResponseAdapterPutAllAddress = httpResponseAdapter.responseUpdateAddress

RouterAddress.post('/', httpResponseAdapterCreateAddress)
RouterAddress.get('/:id', httpResponseAdapterReadOneAddress)
RouterAddress.get('/', httpResponseAdapterReadAllAddress)
RouterAddress.put('/', httpResponseAdapterPutAllAddress)
