import {Router} from 'express'

import {auth} from '../controllers/auth'

const router: Router = Router()

router.get('/authenticate', auth)

export default router
