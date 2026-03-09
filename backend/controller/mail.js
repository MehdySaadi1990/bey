const sendEmail = require('../utils/email')

exports.order= async (req,res,next)=>{
    try {
    const {username, surname, email, country, budget, horizon} = req.body
         const message = `
                    <p>Nom : ${username}</p><br/>
                    <p>Prénom : ${surname}</p><br/>
                    <p>Email : ${email}</p><br/>
                    <p>Pays : ${country}</p><br/>
                    <p>Budget : ${budget}</p><br/>
                    <p>Horizon : ${horizon}</p>
                    `
        await sendEmail(process.env.USER_EMAIL,`Contact Mr ${username}`, message )
        res.status(200).json({message : "email envoyé"})

    } catch (error) {
        res.status(400).json({message : "An error occured"});
    }
    
}