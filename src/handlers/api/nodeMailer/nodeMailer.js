const nodeMailer = require("nodemailer");
require('dotenv').config();

const sendMail = module.exports;

sendMail.configTransport = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.user,
        pass: process.env.pass
    }
});


sendMail.send = async (req,res) => {
    const body = req.body

    const info = await sendMail.configTransport.sendMail({
        from: `${body.name} <${body.email}>`, 
        to: 'dserna@mudi.com.co', 
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

sendMail.errorMudiView = async (req,res)=>{
    const body = req.body;

    const info = await sendMail.configTransport.sendMail({
        from: `MudiBot <mudiBot@mudi.com.co>`, 
        to: ['jrojas@mudi.com.co','jplazas@mudi.com.co','joserodriguez@mudi.com.co'], 
        subject: 'Error de carga modelo 3D - Mudi Bot -', 
        html: `Hemos detectado un error en el siguiente producto en el visor 3D
        <br>
        SKU : ${body.sku}<br>
        IdCliente : ${body.id}<br>
        pagina : ${body.page}
        <br>
        verificar la ruta del storage, la disponibilidad el modelo GLB entre otros casos. 
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

