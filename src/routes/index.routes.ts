import express, { Router } from 'express'
import { RouterV1 } from './v1/index.routes'

export const RouterIndex = express.Router()

RouterIndex.use('/v1', RouterV1)
