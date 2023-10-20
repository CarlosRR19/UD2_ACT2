import { Grupo } from "./grupo.js";
import { Alumno } from "./alumno.js";
import { Instituto } from "./instituto.js";

var alumnoUno = new Alumno("Juan");
var alumnoDos = new Alumno("Pedro");
var alumnoTres = new Alumno("Pepe");
var alumnoCuatro = new Alumno("Armando");

var unGrupo = new Grupo("01");
var otroGrupo = new Grupo("02");

var unInstituto = new Instituto("01", "IES FLEMING");

unGrupo.addAlumno(alumnoUno);
unGrupo.addAlumno(alumnoDos);
otroGrupo.addAlumno(alumnoTres);
otroGrupo.addAlumno(alumnoCuatro);

unInstituto.addGrupo(unGrupo);
unInstituto.addGrupo(otroGrupo);

console.log(unInstituto);

unInstituto.getCodigo();
unInstituto.getAlumnos();
