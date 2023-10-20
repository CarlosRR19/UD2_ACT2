import {Alumno} from "./alumno.js";
export class Grupo {
    constructor(codigoGrupo){
        this._codigoGrupo = codigoGrupo;
        this._listaAlumnos = [];
    }

    addAlumno(Alumno){
        this._listaAlumnos.push(Alumno);
    }

    getAlumnos(){
        return this._listaAlumnos.length;
    }
}
