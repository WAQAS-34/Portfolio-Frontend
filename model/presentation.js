const mongoose = require('mongoose')


const Presentation = new mongoose.Schema({

    webImage: {
        type: String,
        required: [true, "Web image is required"]
    },
    likeCount: {
        type: Number,
        required: [true, "Like Count is required"]
    },
    views: {
        type: Number,
        required: [true, "Views are required"]
    },
    type: {
        type: String,
        required: [true, "Type is required"]
    }

})

module.exports = mongoose.model("Presentation", Presentation);
