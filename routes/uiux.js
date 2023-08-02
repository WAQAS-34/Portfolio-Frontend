const router = require("express").Router();
const { CreateUiUx, GetUiUxs, GetSingleUiUx, UpdateUiUx, DeleteUiUx } = require('../controller/uiux')

router.route('/').post(CreateUiUx).get(GetUiUxs)
router.route('/:id').get(GetSingleUiUx).patch(UpdateUiUx).delete(DeleteUiUx)


module.exports = router
