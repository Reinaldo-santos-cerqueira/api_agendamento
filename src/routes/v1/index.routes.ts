import express from 'express'
import { RouterAddress } from './address.routes'

export const RouterV1 = express.Router()

RouterV1.use('/address', RouterAddress)
