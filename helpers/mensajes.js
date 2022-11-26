require('colors');

const mostrarMenu = () => {
  return new Promise( resolve => {
    console.clear();
    console.log('============================='.green)
    console.log('    Seleccione una opción'.blue)
    console.log('=============================\n'.green)

    console.log(`${ '1.'.blue } Crear tarea`);
    console.log(`${ '2.'.blue } Listar tareas`);
    console.log(`${ '3.'.blue } Listar tareas completadas`);
    console.log(`${ '4.'.blue } Listar tareas pendientes`);
    console.log(`${ '5.'.blue } Completar tarea(s)`);
    console.log(`${ '6.'.blue } Borrar tarea`);
    console.log(`${ '0.'.blue } Salir \n`);

    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    });

    readline.question('Seleccione una opción: ', (opt) => {
      readline.close();
      resolve(opt);
    });
  });
}

const pausa = () => {
  return new Promise( resolve => {
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    });
  
    readline.question(`\nPresione ${ 'ENTER'.blue } para continuar\n`, (opt) => {
      readline.close();
      resolve();
    });
  });
}

module.exports = {
  mostrarMenu,
  pausa
}