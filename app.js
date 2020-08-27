// const { require } = require('yargs');

// const toDo = require('./to-do/to-do');

// const argv = require('yargs').argv;
const colors = require('colors');
const argv = require('./config/yargs').argv;
const toDo = require('./to-do/to-do');


// console.log(argv);

let comando = argv._[0];


switch (comando) {

    case 'crear':
        let tarea = toDo.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':

        let listado = toDo.getListado();

        for (let tarea of listado) {
            console.log('====POR HACER=========='.cyan);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('======================'.cyan);
        }


        break;


    case 'actualizar':

        let actualizado = toDo.actualizar(argv.descripcion, argv.completado);

        // for (let tarea of actualizado) {
        //     console.log('====POR HACER=========='.green);
        console.log(actualizado);
        //     console.log('Estado: ', tarea.actualizado);
        //     console.log('======================'.green);
        // }
        // console.log('Actualiza el estado completado de una tarea TO-DO');
        break;



    case 'borrar':

        let borrado = toDo.borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log('Comando no válido');
        break;
}