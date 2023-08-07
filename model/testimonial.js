const mongoose = require('mongoose')


const Testimonial = new mongoose.Schema({

    clientName: {
        type: String,
        required: [true, "Client Name is required"]
    },
    clientPic: {
        type: String,
        required: [true, "Client Picture is required"]
    },
    county: {
        type: String,
        required: [true, "Country is required"]
    },
    countyPic: {
        type: String,
        required: [true, "Country Picture is required"]
    },
    review: {
        type: String,
        required: [true, "Review  Picture is required"]
    },
    star: {
        type: Number,
        required: [true, "Star array Picture is required"]
    },
    selected: {
        type: Boolean,
        default: false
    },
    portfolioType: {
        type: String,
    }

})

module.exports = mongoose.model("Testimonial", Testimonial);
