const Testimonial = require('../model/testimonial')

const CreateTestimonial = async (req, res) => {
    const data = req.body

    if (!data.clientName) {
        return res.status(400).json({
            message: 'clientName is required',
            success: false
        })
    }

    if (!data.clientPic) {
        return res.status(400).json({
            message: 'clientPic is required',
            success: false
        })
    }

    if (!data.county) {
        return res.status(400).json({
            message: 'county is required',
            success: false
        })
    }

    if (!data.countyPic) {
        return res.status(400).json({
            message: 'countyPic is required',
            success: false
        })
    }

    if (!data.review) {
        return res.status(400).json({
            message: 'review is required',
            success: false
        })
    }

    if (!data.star) {
        return res.status(400).json({
            message: 'star array is required',
            success: false
        })
    }

    try {
        const testimonial = await Testimonial.create({
            clientName: data.clientName,
            clientPic: data.clientPic,
            county: data.county,
            countyPic: data.countyPic,
            review: data.review,
            star: data.star
        })

        res.status(201).json({
            message: 'Testimonial added successfully',
            data: testimonial,
            success: true
        })
    }
    catch (err) {
        res.status(500).json({
            error: err,
            success: false
        })
    }
}



const GetTestimonials = async (req, res) => {
    try {
        const testimonials = await Testimonial.find()
        res.status(200).json({
            data: testimonials,
            success: true
        })
    }
    catch (err) {
        res.status(500).json({
            error: err,
            success: false
        })
    }

}





const GetSingleTestimonial = async (req, res) => {
    try {
        const testimonial = await Testimonial.findOne({ _id: req.params.id })
        if (!testimonial) {
            return res.status(404).json({
                message: `No testimonial with id ${req.params.id}`,
                success: false
            })
        }
        res.status(200).json({
            data: testimonial,
            success: true
        })
    }
    catch (err) {
        res.status(500).json({
            error: err,
            success: false
        })
    }
}




const UpdateTestimonial = async (req, res) => {
    const newObj = {}
    for (let i = 0; i < Object.keys(req.body).length; i++) {
        newObj[Object.keys(req.body)[i]] = Object.values(req.body)[i]
    }
    try {
        const testimonial = await Testimonial.findOneAndUpdate({ _id: req.params.id }, newObj)
        if (!testimonial) {
            return res.status(404).json({
                message: `No testimonial with id ${req.params.id}`,
                success: false
            })
        }
        res.status(200).json({
            message: 'Testimonial updated successfully',
            success: true
        })
    }
    catch (err) {
        res.status(500).json({
            error: err,
            success: false
        })
    }
}


const DeleteTestimonial = async (req, res) => {
    try {
        const testimonial = await Testimonial.findOneAndDelete({ _id: req.params.id })
        if (!testimonial) {
            return res.status(404).json({
                message: `No testimonial with id ${req.params.id}`,
                success: false
            })
        }
        res.status(200).json({
            message: "Testimonial deleted successfully",
            success: true
        })
    }
    catch (err) {
        res.status(500).json({
            error: err,
            success: false
        })
    }
}




module.exports = {
    CreateTestimonial,
    GetTestimonials,
    GetSingleTestimonial,
    UpdateTestimonial,
    DeleteTestimonial
}