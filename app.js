const express       = require('express');
const cors          = require('cors');
const app           = express();
const router        = require('./src/router');
const https         = require('https');
const fs            = require('fs');
require('dotenv').config();

// Config Puerto y listening
const puerto = process.env.PORT;

// Usamos JSON 
app.use(express.json());
// Usamos CORS 
app.use(cors());

app.use('/api/mudiV1', router);

https.createServer({
    key:        fs.readFileSync('/etc/letsencrypt/live/visor.mudi.com.co/privkey.pem'),      // Ruta al archivo de clave privada
    cert:       fs.readFileSync('/etc/letsencrypt/live/visor.mudi.com.co/cert.pem'),         // Ruta al archivo de certificado público
    ca:         fs.readFileSync('/etc/letsencrypt/live/visor.mudi.com.co/chain.pem')         // Ruta al archivo de la autoridad de certificación (opcional)
  }, app.listen(puerto, () => {
    console.log('El servidor está escuchando en el puerto ' + puerto);
}));

