const completado = {
    default: true,
    alias: 'c',
    desc: 'marca como completado o pendiente la tarea'
}

const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'descripcion de la tarea por hacer'
}


const argv = require('yargs')
    .command('crear', 'este comando2 crea una tarea por hacer', {
        descripcion
    })
    .command('actualizar', 'Este es el comando2 para actualizar', {
        descripcion,
        completado
    })
    .command('borrar', 'comando para borrar', {
        descripcion
    })
    .help()
    .argv;


module.exports = {
    argv
}