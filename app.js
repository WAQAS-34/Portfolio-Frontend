const express = require("express")
const fs = require('fs')
const path = require('path')
require('dotenv').config()
const cors = require('cors')
const ConnectMongoDB = require("./db/db")

const testimonial = require('./routes/testimonial')
const mobileappdev = require('./routes/mobileappdev')
const webdev = require('./routes/webdev')
const uiux = require('./routes/uiux')
const presentation = require('./routes/presentation')
const contact = require('./routes/contact')

// const upload = require('./routes/upload')
const multer = require("multer")
const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use('/images', express.static(__dirname + '/images'));
app.use(express.json())


app.use("/api/v1/testimonial", testimonial)
app.use("/api/v1/mobileappdev", mobileappdev)
app.use("/api/v1/webdev", webdev)
app.use("/api/v1/uiux", uiux)
app.use("/api/v1/presentation", presentation)
app.use("/api/v1/contact", contact)



// Get All Images

app.get('/api/v1/getimages', (req, res) => {
    const directoryPath = path.join(__dirname, 'images');
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(files);
    });
});

// Upload Image

const storageEngine = multer.diskStorage({
    destination: "images",
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}--${file.originalname.split(' ').join('-')}`);
    },
});

const upload = multer({
    storage: storageEngine,
    fileFilter: function (req, file, callback) {
        var ext = path.extname(file.originalname);
        if (ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') {
            return callback(new Error('Only images are allowed'))
        }
        callback(null, true)
    },
});

app.post("/api/v1/upload", upload.single("image"), (req, res) => {
    // const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/jpg']
    // if (!allowedMimeTypes.includes(req.file.mimetype)) {
    //     return res.status(400).json({
    //         message: "Please upload a valid image"
    //     });
    // }

    if (req.file) {
        res.json({
            message: "Image uploaded successfully",
            link: "/images/" + req.file.filename
        });
    } else {
        res.status(400).json({
            message: "Please upload a valid image"
        });
    }
})



app.get('/', (req, res) => {
    res.send({ message: 'welcome my portfolio' })
})

ConnectMongoDB(process.env.MONGO_URI).then(() => {
    console.log('connected to db')
    app.listen(PORT, () => {
        console.log(`Listening on Port ${PORT}`)
    })

}).catch((err) => {
    console.log("error => ", err)
})