const mailjet = require('node-mailjet').connect('a0e458203ed8506cd71faaf29caecbd5', 'c40c3d152555b5649fe1b5ee659a0598')
const app = require("express")()
const cors = require("cors")
const bodyParser = require('body-parser');
app.use(cors())
app.use(bodyParser())

app.use('/registration', (req, res)=>{ 
    console.log(req.body);
    try {
        const {firstName, lastName, email} = req.body
        mailjet
    .post("send", { 'version': 'v3.1' })
    .request({
        "Messages": [
            {
                "From": {
                    "Email": "igor.pestov.mern@gmail.com",
                    "Name": "Igor"
                },
                "To": [
                    {
                        "Email": email,
                        "Name": firstName
                    }
                ],
                "Subject": `Hello ${firstName} ${lastName}`,
                "TextPart": "My first Mailjet email",
                "HTMLPart": "To verify your mail, follow this link: http://localhost:3000/main",
                "CustomID": "AppGettingStartedTest"
            }
        ]
    })
    .then(() => {
        res.status(200).json({message: 'success'})
    })
    .catch(e => {
        res.status(400).json(e)
    })


    } catch (error) {
        res.status(500).json(error)
    }
})

app.listen(4000, () => {
})