const express           = require('express');
const router            = express.Router();
const getModel          = require("./handlers/viewer/getModelViewer");
const sendMail          = require("./handlers/api/nodeMailer/nodeMailer");
const verifyDevice      = require("./handlers/verifyDevice/verifyDevice")

/*  Obtener dirección de un modelo 3D 
Uso : Visor3D  */
router.post('/getModelViewer', getModel.getModelViewer);
router.post('/getModelViewerById', getModel.getModelViewerById);
router.post('/mailMudiForm', sendMail.send);
router.post('/mailMudiError3D', sendMail.errorMudiView);
router.post('/verifyDevice' ,verifyDevice.verify);

module.exports=router;