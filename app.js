const express = require('express');
const cors = require('cors');
const app = express();
const router = require('./src/router');
const https = require('https');
const http = require('http');
const fs = require('fs');
require('dotenv').config();

// Config Puerto y listening
const puerto = process.env.PORT;

// Usamos JSON
app.use(express.json());
// Usamos CORS
app.use(cors());

app.use('/api/mudiV1', router);

// Configuración del servidor HTTPS
// const opcionesHttps = {
//     key: fs.readFileSync('/etc/letsencrypt/live/viewer.mudi.com.co/privkey.pem'),
//     cert: fs.readFileSync('/etc/letsencrypt/live/viewer.mudi.com.co/cert.pem'),
//     ca: fs.readFileSync('/etc/letsencrypt/live/viewer.mudi.com.co/chain.pem')
// };

// const servidorHttps = https.createServer(opcionesHttps, app);
// servidorHttps.listen(puerto, () => {
//     console.log('El servidor está escuchando en el puerto ' + puerto + ' con HTTPS');
// });

// Configuración del servidor HTTP (cambiado de 'https' a 'http')
const servidorHttp = http.createServer(app);
servidorHttp.listen(puerto, () => {
    console.log('El servidor está escuchando en el puerto ' + puerto + ' localmente');
});

