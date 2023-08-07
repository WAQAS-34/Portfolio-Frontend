const SelectedTrue = require("../controller/Selected");

const router = require("express").Router();

router.route('/').get(SelectedTrue)


module.exports = router
