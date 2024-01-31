const fs            = require('fs');
const verifyModels  = module.exports;
const filePath      = './src/handlers/verifyDevice/brandsModels.json';;

verifyModels.verify = (req,res) =>{
    const { model, brand } = req.body;

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo JSON:', err);
            return res.status(500).send('Error interno del servidor');
        }

        try {
            // Analizar el contenido del archivo JSON para convertirlo en un objeto JavaScript
            const marcasModelos = JSON.parse(data);

            // Verificar si la marca existe en el JSON
            if (marcasModelos[brand]) {
            
            const modeloEncontrado = marcasModelos[brand].includes(model);
            modeloEncontrado ? res.status(200).json({ model: model, brand: brand , ARDevice:true }) : res.status(404).json({ 
                message: `El módelo: "${model}" de la marca: "${brand}" no posee las características para una experiencia de realidad aumentada`,
                brand:brand,
                model:model
            });
            } else {
            res.status(404).json({ message: `El módelo: "${model}" de la marca: "${brand}" no posee las características para una experienca de realidad aumentada`});
            }
        } catch (error) {
            console.error('Error al analizar el archivo JSON:', error);
            res.status(500).send('Error interno del servidor');
        }
    });
}