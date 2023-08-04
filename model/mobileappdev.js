const mongoose = require('mongoose')


const MobileAppDev = new mongoose.Schema({

    appName: {
        type: String,
        required: [true, "App name is required"]
    },
    appImage: {
        type: String,
        required: [true, "App image is required"]
    },
    appSkills: {
        type: [String],
        required: [true, "App skills are required"]
    },
    allScreenImages: {
        type: [String],
        required: [true, "Screen images are required"]
    },
    selected: {
        type: Boolean,
        default: false
    },
    portfolioType: {
        type: String,
    }
})

module.exports = mongoose.model("MobileAppDev", MobileAppDev);
