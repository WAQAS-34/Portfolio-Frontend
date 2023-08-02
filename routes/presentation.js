const router = require("express").Router();
const { CreatePresentation, GetPresentations, GetSinglePresentation, UpdatePresentation, DeletePresentation } = require('../controller/presentation')

router.route('/').post(CreatePresentation).get(GetPresentations)
router.route('/:id').get(GetSinglePresentation).patch(UpdatePresentation).delete(DeletePresentation)


module.exports = router
