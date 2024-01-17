const express           = require('express');
const router            = express.Router();
const getModel          = require("./handlers/viewer/getModelViewer");
const sendMail          = require("./handlers/api/nodeMailer/nodeMailer")

/*  Obtener dirección de un modelo 3D 
Uso : Visor3D  */
router.post('/getModelViewer', getModel.getModelViewer);
router.post('/mailMudiForm', sendMail.send)

module.exports=router;