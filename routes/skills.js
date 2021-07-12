import { Router } from 'express'
const router = Router()

import * as skillsCtrl from "..controllers/skill.js"

router.get('/', skillsCtrl.index)
router.get('/new', skillsCtrl.new)
router.get('/:id', skillsCtrl.show)
router.post('/', skillsCtrl.create)
// localhost:3000/skills/:id
router.delete('/:id', skillsCtrl.delete)

export {
  router
}
