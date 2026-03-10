const sendEmail = require('../utils/email')

exports.contact= async (req,res,next)=>{
    try {
    const db = req.app.get('db');
    const {username, surname, email, country, budget, horizon} = req.body
        await db.query(`INSERT INTO users (username, surname, email, country)
         VALUES (
         '${username}',
         '${surname}',
         '${email}',
         '${country}'
         )`)
         const message = `
                    <p>Nom : ${username}</p><br/>
                    <p>Prénom : ${surname}</p><br/>
                    <p>Email : ${email}</p><br/>
                    <p>Pays : ${country}</p><br/>
                    <p>Budget : ${budget}</p><br/>
                    <p>Horizon : ${horizon}</p>
                    `
        await sendEmail(process.env.USER_EMAIL,`Contact Mr/Mme ${username}`, message )
        res.status(200).json({message : "utilisateur crée et email envoyé"})

    } catch (error) {
        res.status(400).json({message : "An error occured"});
    }
    
}