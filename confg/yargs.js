const opts = {
    base: {
        demand: true,
        alias: 'b',
    },
    limite: {
        alias: 'l',
        default: 10,
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Genera el archivo de tablas de multiplicar con una base y un limite', opts)
    .help()
    .argv; // paquete que se agrega a nuestra app

module.exports = {
    argv
}