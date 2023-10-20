import {Grupo} from "./grupo.js";

export class Instituto {
  constructor(codigoInstituto, nombre) {
    this._codigoInstituto = codigoInstituto;
    this._nombre = nombre;
    this._listaGrupos = [];
  }

  addGrupo(Grupo) {
    this._listaGrupos.push(Grupo);
  }

  getCodigo() {
    console.log(
      "Codigo del instituto " + this._nombre + ": " + this._codigoInstituto
    );
  }

  getAlumnos() {
    
    var contador = 0;
    for(var i = 0; i < this._listaGrupos.length; i++){
        contador += this._listaGrupos[i].getAlumnos();
    }
    console.log("Cantidad de alumnos del centro: " + contador);
  }
}
