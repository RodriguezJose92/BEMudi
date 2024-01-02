const express           = require('express');
const router            = express.Router();
const getModel          = require("./handlers/viewer/getModelViewer")

/*  Obtener dirección de un modelo 3D 
Uso : Visor3D  */
router.post('/getModelViewer', getModel.getModelViewer);

module.exports=router;