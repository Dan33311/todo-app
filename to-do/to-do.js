const fs = require('fs');
const argv = require('yargs');

//  -- 1
let listadoPorHacer = [];

// -- 3
const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('DB/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    })
}

//  -- 4
const cargarDB = () => {

    try {
        listadoPorHacer = require('../DB/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }

}

//  -- 2
const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;
}

// -- 5
const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

// -- 6
const actualizar = (descripcion, completado = true) => {

    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false
    }
}

//  -- 7
const borrar = (descripcion) => {

    cargarDB();
    let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion)

    if (listadoPorHacer.length === nuevoListado.length) {
        return false
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}