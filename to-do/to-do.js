// const { require } = require("yargs");

const fs = require('fs');

let listadoToDo = [];

const guardarDB = () => {


    let data = JSON.stringify(listadoToDo);

    fs.writeFile('db/data.json', data, (err) => {

        if (err) throw new Error('No se pudo grabar', err);
    });
}

const cargarDB = () => {

    try {
        listadoToDo = require('../db/data.json');


    } catch (error) {
        listadoToDo = [];
    }
    // console.log(listadoToDo);
}

const actualizar = (descripcion, completado = true) => {

    cargarDB();

    let index = listadoToDo.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoToDo[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }

}


const borrar = (descripcion) => {

    cargarDB();

    let listadoDeBorrado = listadoToDo.filter(tarea => {
        return tarea.descripcion !== descripcion
    });

    if (listadoToDo.length === listadoDeBorrado.length) {
        return false;
    } else {
        listadoToDo = listadoDeBorrado;
        guardarDB();
        return true;
    }




}
const crear = (descripcion) => {

    cargarDB();


    let toDo = {
        descripcion,
        completado: false
    };


    listadoToDo.push(toDo);
    guardarDB();

    return toDo;
}
const getListado = () => {
    cargarDB();
    return listadoToDo;
}

module.exports = {

    crear,
    getListado,
    actualizar,
    borrar

}