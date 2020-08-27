const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'

};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
}


const { alias } = require('yargs')


const argv = require('yargs')


.command('crear', 'Crear un elemento TO-DO', {
        descripcion
        // : {
        //     demand: true,
        //     alias: 'd',
        //     desc: 'Descripcion de la tarea TO-DO'
        // }

    })
    .command('actualizar', 'Actualiza el estado a DONE de una tarea', {

        descripcion,
        completado
        //: {
        //     demand: true,
        //     alias: 'd',
        //     desc: 'Descripcion de la tarea TO-DO'
        // },
        // completado: {
        //     default: true,
        //     alias: 'c',
        //     desc: 'Marca como completado o pendiente la tarea'
        // }
    })

.command('borrar', 'Borra de una tarea ', {
        descripcion
        //: {
        //     demand: true,
        //     alias: 'd',
        //     desc: 'Descripcion de una tarea a borrar'

        // }

    })
    .help()
    .argv;

module.exports = {

    argv
}