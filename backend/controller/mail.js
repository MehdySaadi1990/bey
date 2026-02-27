const sendEmail = require('../utils/email')

exports.orderItem= async (req,res,next)=>{
    try {
        const orderObject = req.body
        
    const message = `
                    `
    await sendEmail(process.env.USER_EMAIL,``, message )
    res.status(200).json({orderNumber:orderNumber})
    } catch (error) {
        res.status(400).json({message : "An error occured"});
    }
    
}