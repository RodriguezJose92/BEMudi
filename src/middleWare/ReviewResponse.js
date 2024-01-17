const ReviewResponse = module.exports;

/**  Filtro 0 --- Error del cliente  ---- ( capa 8 ) */

    /** Estatus 400 : Peticiones erroneas por parte del cliente  */
    ReviewResponse.errorClient = res => res.status(400).json({ message: "los valores deben ser debidamente diligenciados."});

/**  Filtro 1 --- Respuestas vacias  ---- */

    /** Verificador de respuestas vacias */
    ReviewResponse.reviewer = data => {
        /** Estatus 200 : Respuesta Exitosa  */
        data.data.length == 1 ? data.res.status(200).json({ data: data.data }) : 
        /** Estatus 404 : Sin contenido  */
        data.res.status(404).json({ A_MudiError: 404, message:'Productos no existentes en base de datos',dataClient:data.body }) ;
    };
    