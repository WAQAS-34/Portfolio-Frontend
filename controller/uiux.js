const UiUx = require('../model/uiux')

const CreateUiUx = async (req, res) => {
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
        const uiUx = await UiUx.create({
            webImage: data.webImage,
            likeCount: data.likeCount,
            views: data.views
        })

        res.status(201).json({
            message: 'UiUx added successfully',
            data: uiUx,
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



const GetUiUxs = async (req, res) => {
    try {
        const uiUx = await UiUx.find()
        res.status(200).json({
            data: uiUx,
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





const GetSingleUiUx = async (req, res) => {
    try {
        const uiUx = await UiUx.findOne({ _id: req.params.id })
        if (!uiUx) {
            return res.status(404).json({
                message: `No uiUx with id ${req.params.id}`,
                success: false
            })
        }
        res.status(200).json({
            data: uiUx,
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




const UpdateUiUx = async (req, res) => {
    const newObj = {}
    for (let i = 0; i < Object.keys(req.body).length; i++) {
        newObj[Object.keys(req.body)[i]] = Object.values(req.body)[i]
    }
    try {
        const uiUx = await UiUx.findOneAndUpdate({ _id: req.params.id }, newObj)
        if (!uiUx) {
            return res.status(404).json({
                message: `No UiUx with id ${req.params.id}`,
                success: false
            })
        }
        res.status(200).json({
            message: 'UiUx updated successfully',
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


const DeleteUiUx = async (req, res) => {
    try {
        const uiUx = await UiUx.findOneAndDelete({ _id: req.params.id })
        if (!uiUx) {
            return res.status(404).json({
                message: `No uiUx with id ${req.params.id}`,
                success: false
            })
        }
        res.status(200).json({
            message: "uiUx deleted successfully",
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
    CreateUiUx,
    GetUiUxs,
    GetSingleUiUx,
    UpdateUiUx,
    DeleteUiUx
}