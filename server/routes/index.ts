import appRoot from 'app-root-path'
import { Router } from 'express'
import testRouter from './test'

const router = Router({})

router.get('/', (req, res) => {
  res.sendFile(appRoot.resolve('/public/index.html'))
})
router.use('/api/v1/test', testRouter)

export default router
