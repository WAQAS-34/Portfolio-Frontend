const WebDev = require('../model/webdev')

const CreateWebDev = async (req, res) => {
    const data = req.body

    if (!data.webImage) {
        return res.status(400).json({
            message: 'webImage is required',
            success: false
        })
    }
    if (!data.likeCount) {
        return res.status(400).json({
            message: 'likeCount is required',
            success: false
        })
    }
    if (!data.views) {
        return res.status(400).json({
            message: 'views are required',
            success: false
        })
    }


    try {
        const webDev = await WebDev.create({
            webImage: data.webImage,
            likeCount: data.likeCount,
            views: data.views,
            selected:data.selected,
            portfolioType:data.portfolioType,
        })

        res.status(201).json({
            message: 'WebDev added successfully',
            data: webDev,
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



const GetWebDevs = async (req, res) => {
    try {
        const webDevs = await WebDev.find()
        res.status(200).json({
            data: webDevs,
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





const GetSingleWebDev = async (req, res) => {
    try {
        const webDev = await WebDev.findOne({ _id: req.params.id })
        if (!webDev) {
            return res.status(404).json({
                message: `No webDev with id ${req.params.id}`,
                success: false
            })
        }
        res.status(200).json({
            data: webDev,
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




const UpdateWebDev = async (req, res) => {
    const newObj = {}
    for (let i = 0; i < Object.keys(req.body).length; i++) {
        newObj[Object.keys(req.body)[i]] = Object.values(req.body)[i]
    }
    try {
        const webDev = await WebDev.findOneAndUpdate({ _id: req.params.id }, newObj)
        if (!webDev) {
            return res.status(404).json({
                message: `No webDev with id ${req.params.id}`,
                success: false
            })
        }
        res.status(200).json({
            message: 'WebDev updated successfully',
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


const DeleteWebDev = async (req, res) => {
    try {
        const webDev = await WebDev.findOneAndDelete({ _id: req.params.id })
        if (!webDev) {
            return res.status(404).json({
                message: `No webDev with id ${req.params.id}`,
                success: false
            })
        }
        res.status(200).json({
            message: "WebDev deleted successfully",
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
    CreateWebDev,
    GetWebDevs,
    GetSingleWebDev,
    UpdateWebDev,
    DeleteWebDev
}