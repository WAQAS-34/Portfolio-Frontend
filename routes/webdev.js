const router = require("express").Router();
const { CreateWebDev, GetWebDevs, GetSingleWebDev, UpdateWebDev, DeleteWebDev } = require('../controller/webdev')

router.route('/').post(CreateWebDev).get(GetWebDevs)
router.route('/:id').get(GetSingleWebDev).patch(UpdateWebDev).delete(DeleteWebDev)


module.exports = router