const router = require("express").Router();
const { SendInfo } = require('../controller/contact.js')

router.route('/').post(SendInfo)

module.exports = router
