const nodeMailer = require("nodemailer");

const sendMail = module.exports;

sendMail.configTransport = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "jose.rodriguez920929@gmail.com",
        pass: "vdgu wgch aizi jipj"
    }
});


sendMail.send = async (req,res) => {
    const body = req.body

    const info = await sendMail.configTransport.sendMail({
        from: `${body.name} <${body.email}>`, 
        to: 'joserodriguez@mudi.com.co', 
        subject: 'contacto desde la página Mudi', 
        html: `<h2> Información general</h2>
        <div style="display:flex; align-items: center;">
        <h3>Nombre: </h3>
        <p>${body.name}</p>
        </div>

        <div style="display:flex; align-items: center;">
        <h3>Email: </h3>      
        <p>${body.email}</p>
        </div>

        <div style="display:flex; align-items: center;">
        <h3>Company: </h3>    
        <p>${body.company}</p>
        </div>

        <div style="display:flex; align-items: center;">
        <h3>Contacto: </h3>   
        <p>${body.phone}</p>
        </div>

        <h2> solicutud del interesado: </h2>
        <p>${body.message}<p>
        `
    });

    if(info.response.includes('OK')){
        res.json({
            status:'Enviado satisfactoriamente'
        })
    }else{
        res.json({
            status:'Error al enviar el mensaje'
        })
    }
}

module.exports = sendMail;

