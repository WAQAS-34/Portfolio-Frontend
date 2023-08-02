const nodemailer = require("nodemailer");

const SendInfo = async (req, res) => {
    const data = req.body

    if (!data.name) {
        return res.status(400).json({
            message: 'Name is required',
            success: false
        })
    }
    if (!data.email) {
        return res.status(400).json({
            message: 'Email is required',
            success: false
        })
    }
    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    if (!regex.test(data.email)) {
        return res.status(400).json({
            message: 'Enter a valid email',
            success: false
        })
    }

    if (!data.subject) {
        return res.status(400).json({
            message: 'Subject is required',
            success: false
        })
    }
    if (!data.message) {
        return res.status(400).json({
            message: 'Message is required',
            success: false
        })
    }
    let config = {
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASS
        }
    }
    let transporter = nodemailer.createTransport(config);

    try {
        let info = await transporter.sendMail({
            from: process.env.EMAIL, // sender address
            to: process.env.EMAIL, // list of receivers 
            subject: data.subject, // Subject line
            html: `<div>
                        <p>Name: ${data.name}</p>
                        <p>Email: ${data.email}</p>
                        <p>Subject: ${data.subject}</p>
                        <p>Message: ${data.message}</p>
                    </div>`, // html body
        });

        return res.status(200).json({
            message: 'message sent successfully',
            success: true
        })
    } catch (error) {

    }

}


module.exports = {
    SendInfo
}