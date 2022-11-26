const Tarea = require('./tarea');
const colors = require('colors');

class Tareas {
  _listado = {};

  constructor() {
    this._listado = {}
  }

  get listadoArr() {
    const listado = []
    Object.keys( this._listado ).forEach( key => {
      const tarea = this._listado[ key ];
      listado.push( tarea );
    });

    return listado;
  }

  crearTarea( desc = '' ) {
    const tarea = new Tarea( desc );
    this._listado[ tarea.id ] = tarea;
  }

  cargarTareasFromArray( tareas = [] ) {
    tareas.map( tarea => {
      this._listado[ tarea.id ] = tarea;
    });
  }

  listadoCompleto() {
    console.log('');
    this.listadoArr.map( ( tarea, indice ) => {
      const { desc, completadoEn } = tarea;
      const estado = ( !!completadoEn ) ? 'Completada'.green : 'Pendiente'.red;
      console.log(`${ colors.blue( indice + 1 ) }${ '.'.blue } ${ desc } :: ${ estado }`);
    });
  }

  listarPendientesCompletadas( completadas = true ) {
    console.log('');
    const tareasFiltradas = this.listadoArr.filter( tarea => !!tarea.completadoEn === completadas )
    tareasFiltradas.forEach( ( tarea, indice ) => {
      const { desc } = tarea;
      const estado = ( completadas ) ? tarea.completadoEn.green : 'Pendiente'.red;
      console.log(`${ colors.blue( indice + 1 ) }${ '.'.blue } ${ desc } :: ${ estado }`);
    });
  }

  borrarTarea( id = '' ) {
    if ( this._listado[id] ) {
      delete this._listado[id];
    }
  }

  toggleCompletadas( ids = [] ) {
    ids.forEach( id => {
      const tarea = this._listado[id];
      if ( !tarea.completadoEn ) {
        tarea.completadoEn = new Date().toISOString()
      }
    });

    this.listadoArr.forEach( tarea => {
      if( !ids.includes(tarea.id) ) {
        this._listado[tarea.id].completadoEn = null;
      }
    })
  }
}

module.exports = Tareas;