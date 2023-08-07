const MobileAppDev = require('../model/mobileappdev')

const CreateMobileAppDev = async (req, res) => {
    const data = req.body

    if (!data.appName) {
        return res.status(400).json({
            message: 'appName is required',
            success: false
        })
    }
    if (!data.appDecs) {
        return res.status(400).json({
            message: 'app Decsription is required',
            success: false
        })
    }

    if (!data.appImage) {
        return res.status(400).json({
            message: 'appImage is required',
            success: false
        })
    }

    if (!data.appSkills || !data.appSkills.length) {
        return res.status(400).json({
            message: 'appSkills are required',
            success: false
        })
    }

    if (!data.allScreenImages || !data.allScreenImages.length) {
        return res.status(400).json({
            message: 'allScreenImages are required',
            success: false
        })
    }

    try {
        const mobileAppDev = await MobileAppDev.create({
            appName: data.appName,
            appDecs:data.appDecs,
            appImage: data.appImage,
            appSkills: data.appSkills,
            allScreenImages: data.allScreenImages,
            selected: data.selected,
            portfolioType: data.portfolioType,
        })

        res.status(201).json({
            message: 'MobileAppDev added successfully',
            data: mobileAppDev,
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



const GetMobileAppDevs = async (req, res) => {
    try {
        const mobileAppDevs = await MobileAppDev.find()
        res.status(200).json({
            data: mobileAppDevs,
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





const GetSingleMobileAppDev = async (req, res) => {
    try {
        const mobileAppDev = await MobileAppDev.findOne({ _id: req.params.id })
        if (!mobileAppDev) {
            return res.status(404).json({
                message: `No MobileAppDev with id ${req.params.id}`,
                success: false
            })
        }
        res.status(200).json({
            data: mobileAppDev,
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




const UpdateMobileAppDev = async (req, res) => {
    const newObj = {}
    for (let i = 0; i < Object.keys(req.body).length; i++) {
        newObj[Object.keys(req.body)[i]] = Object.values(req.body)[i]
    }
    try {
        const mobileAppDev = await MobileAppDev.findOneAndUpdate({ _id: req.params.id }, newObj)
        if (!mobileAppDev) {
            return res.status(404).json({
                message: `No mobileAppDev with id ${req.params.id}`,
                success: false
            })
        }
        res.status(200).json({
            message: 'MobileAppDev updated successfully',
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


const DeleteMobileAppDev = async (req, res) => {
    try {
        const mobileAppDev = await MobileAppDev.findOneAndDelete({ _id: req.params.id })
        if (!mobileAppDev) {
            return res.status(404).json({
                message: `No mobileAppDev with id ${req.params.id}`,
                success: false
            })
        }
        res.status(200).json({
            message: "MobileAppDev deleted successfully",
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
    CreateMobileAppDev,
    GetMobileAppDevs,
    GetSingleMobileAppDev,
    UpdateMobileAppDev,
    DeleteMobileAppDev
}