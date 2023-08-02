const Presentation = require('../model/presentation')

const CreatePresentation = async (req, res) => {
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
    if (!data.type) {
        return res.status(400).json({
            message: 'type is required',
            success: false
        })
    }
    if (data.type !== "GoogleSlide" && data.type !== "Keynote" && data.type !== "PowerPoint") {
        return res.status(400).json({
            message: 'Type is not valid.',
            success: false
        })
    }

    try {
        const presentation = await Presentation.create({
            webImage: data.webImage,
            likeCount: data.likeCount,
            views: data.views,
            type: data.type
        })

        res.status(201).json({
            message: 'Presentation added successfully',
            data: presentation,
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



const GetPresentations = async (req, res) => {
    const type = req.query.type
    try {
        const presentation = await Presentation.find({ type: type })
        res.status(200).json({
            data: presentation,
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





const GetSinglePresentation = async (req, res) => {
    try {
        const presentation = await Presentation.findOne({ _id: req.params.id })
        if (!presentation) {
            return res.status(404).json({
                message: `No presentation with id ${req.params.id}`,
                success: false
            })
        }
        res.status(200).json({
            data: presentation,
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




const UpdatePresentation = async (req, res) => {
    const newObj = {}
    for (let i = 0; i < Object.keys(req.body).length; i++) {
        newObj[Object.keys(req.body)[i]] = Object.values(req.body)[i]
    }
    try {
        const presentation = await Presentation.findOneAndUpdate({ _id: req.params.id }, newObj)
        if (!presentation) {
            return res.status(404).json({
                message: `No presentation with id ${req.params.id}`,
                success: false
            })
        }
        res.status(200).json({
            message: 'Presentation updated successfully',
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


const DeletePresentation = async (req, res) => {
    try {
        const presentation = await Presentation.findOneAndDelete({ _id: req.params.id })
        if (!presentation) {
            return res.status(404).json({
                message: `No presentation with id ${req.params.id}`,
                success: false
            })
        }
        res.status(200).json({
            message: "Presentation deleted successfully",
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
    CreatePresentation,
    GetPresentations,
    GetSinglePresentation,
    UpdatePresentation,
    DeletePresentation
}