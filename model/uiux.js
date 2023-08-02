const mongoose = require('mongoose')


const UiUx = new mongoose.Schema({

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
    }

})

module.exports = mongoose.model("UiUx", UiUx);
