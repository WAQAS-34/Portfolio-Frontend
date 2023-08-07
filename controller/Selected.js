const mobileappdev = require("../model/mobileappdev")
const presentation = require("../model/presentation")
const webdev = require("../model/webdev")
const MobileAppDev = require('../model/mobileappdev')
const uiux = require("../model/uiux")

const SelectedTrue = async (req, res) => {

    try {
        const presentationSel = await presentation.find({ selected: true })
        const uiuxSel = await uiux.find({ selected: true })
        const WebDev = await webdev.find({ selected: true })
        const MobileAppDe = await MobileAppDev.find({ selected: true })
        const selectData = [...presentationSel, ...uiuxSel, ...WebDev, ...MobileAppDe]
        console.log("presentation", selectData)
        res.status(200).json({
            data: selectData,
            success: false
        })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({
            error: err,
            success: false
        })
    }

}
module.exports = SelectedTrue