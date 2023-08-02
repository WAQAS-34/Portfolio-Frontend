const router = require("express").Router();
const { CreateMobileAppDev, GetMobileAppDevs, GetSingleMobileAppDev, UpdateMobileAppDev, DeleteMobileAppDev } = require('../controller/mobileappdev')

router.route('/').post(CreateMobileAppDev).get(GetMobileAppDevs)
router.route('/:id').get(GetSingleMobileAppDev).patch(UpdateMobileAppDev).delete(DeleteMobileAppDev)


module.exports = router