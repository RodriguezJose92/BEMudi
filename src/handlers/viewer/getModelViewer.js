const getModel = module.exports;
const DB = require("../../../services/mysql");
const ReviewResponse = require('../../middleWare/ReviewResponse')

/** */
getModel.getModelViewer=(req,res)=>{
    
    const {idcompany,sku} = req.body;
    
    /* Estado 400 : Solicitud Incorecta && Fin del proceso*/
    if( idcompany == undefined || sku == undefined ){ ReviewResponse.errorClient(res); return };
    
    /** Los parametros si fueron llenados debidamente*/
    const queryConsult = `SELECT company.nameCompany,company.loadingText,company.companyColor, company.companyImageUrl, company.prefixPath , company.disclaimerText, company.moveText, company.panText, company.moveTextMobile, company.panTextMobile, company.titleSize, product.nameProduct, product.productStatus_idproductStatus AS fase, product.status AS estadoProducto, product.EnvironmentSkyPath ,product.sku, product.productWidth, product.productHeight, product.productDepth FROM company, project, product
    WHERE company.idcompany=project.company_idcompany
    AND project.idproject = product.project_idproject
    AND sku = ? AND idcompany = ? `;
    
    DB.query( queryConsult, [sku,idcompany] , (err,data)=>{
        if(err) throw err;
        ReviewResponse.reviewer({ data, res, body:req.body})
    });
};
