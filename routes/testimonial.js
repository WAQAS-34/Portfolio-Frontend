const router = require("express").Router();
const { CreateTestimonial, GetTestimonials, GetSingleTestimonial, UpdateTestimonial, DeleteTestimonial } = require('../controller/testimonial')

router.route('/').post(CreateTestimonial).get(GetTestimonials)
router.route('/:id').get(GetSingleTestimonial).patch(UpdateTestimonial).delete(DeleteTestimonial)


module.exports = router