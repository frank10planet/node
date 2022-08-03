const argv = require('yargs')
            .option('b',{
                alias: 'base',
                type: 'number',
                demandOption: true,
                describe: 'Es la base de la tabla de multiplicar'
            })
            .option('h',{
                alias: 'hasta',
                type: 'number',
                demandOption: false,
                default: 10,
                describe: 'Se coloca el limite',
            })
            .option('l',{
                alias: 'listar',
                type: 'boolean',
                default: false,
                describe: 'Muestra la tabla en consola',
            })
            .check( (argv,options) => {
                if (isNaN( argv.b )) {
                    throw 'La base debe ser solo un numero'
                }
                return true
            } )
            .argv


module.exports = argv;            