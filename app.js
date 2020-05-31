// Require

//const fs = require('fs');  Libreria de Node para utilizar sus funcionalidades
// const fs = require('express'); paquete externo que se instala
// const fs = require('./fs'); archivos que nosotros creamos y queremos acceder y utilizarlos

const { argv } = require('./confg/yargs')
    //const { argv } = require('./confg/yargs').argv esta es otra forma de importar la funcion que necesito
const color = require('colors')
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');


let comando = argv._[0];

switch (comando) {
    case 'listar':
        // console.log('Listar');
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        // console.log('Crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`El nombre del archivo es ${archivo}`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
}


//console.log('Limite', argv.limite); // muestra el limite que le paso por parametro 
//console.log(argv.base); //me muestra el parametro que le paso a la base
//console.log(argv); // me muestra un objeto, los que tienen --(son flags)

//let argv2 = process.argv;
//console.log(argv2); // me devuelve un array 
// let parametro = argv[2];
// let base = parametro.split('=')[1];