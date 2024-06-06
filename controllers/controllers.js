const mysql = require('mysql');



const connection = mysql.createConnection({
    host:'localhost',
    user: 'usrturnero',
    password: 'S0portecc1@08',
    database: 'ludoteca'
});

connection.connect((err) =>{
    if(err){
        console.log('error en la conexion a la db: ', err);
        return;
    }
    console.log('conexion a la db exitosa');
});

/*const consultarFolios = (req,res) => {
    connection.query('CALL consultarFolios()', (err, results) =>{
        if(err){
            console.log("Error al obtener los folios: ", err);
            res.status(500).end('Error interno del Servidor (obtener Folios)');
            return;
        }
        res.json(results);
    });
}*/



const consultarFolios = (req,res) => {
    connection.query('SELECT folio FROM registro', (err, results) =>{
        if(err){
            console.log("Error al obtener los folios: ", err);
            res.status(500).end('Error interno del Servidor (obtener Folios)');
            return;
        }
        res.json(results);
    });
}

const registrarInfante = (req,res) =>{
    const nombre_infante = req.body.nombre_infante;
    const sexo_infante = req.body.sexo_infante;
    const edad_infante = req.body.edad_infante;
    const foto_infante_responsable = req.body.foto_infante_responsable;
    const nombre_responsable = req.body.nombre_responsable;
    const parentesco = req.body.parentesco;
    const area = req.body.area;
    const numero_contacto = req.body.numero_contacto;
    const numero_contacto2 = req.body.numero_contacto2;
    const identificacion_frontal = req.body.identificacion_frontal;
    const identificacion_trasera = req.body.identificacion_trasera;
    
    connection.query('CALL registrar(?,?,?,?,?,?,?,?,?,?,?)',[
        nombre_infante,
        sexo_infante,
        edad_infante,
        foto_infante_responsable,
        nombre_responsable,
        parentesco,
        area,
        numero_contacto,
        numero_contacto2,
        identificacion_frontal,
        identificacion_trasera] ,(err,results) =>{
        if(err){
            console.log('Error al registrar: ', err);
            res.status(500).end('Error al registrar');
        }
        res.json(results);
    });
}

module.exports = {
    consultarFolios,
    registrarInfante,
};