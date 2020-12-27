import { Router } from 'express'

const router = Router({})

router.get('/', () => {
  console.log('안녕한가?')
})

export default router
