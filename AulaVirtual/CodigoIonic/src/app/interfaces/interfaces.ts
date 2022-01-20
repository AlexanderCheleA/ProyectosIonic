export interface ComponenteMenu{
    icon:string;
    nombre:string;
    pagina:string;
    perfil:number;
}

export interface Categoria{
    categoria: string;
    curso: Curso[];
}
export interface datass{ 
    idPersona:string;
}

///////////////////////////////////////////////////////////
export interface Persona{
    usuario:string;
    contrasenia:string;
}

export interface Persona{
    usuario:string;
    contrasenia:string;
}

/* export interface Admin{
    idEst:number;
    usuario:string;
    contrasenia:string;
    idPersona:number;
}

export interface EstudianteDocente{
    idEst:number;
    usuario:string;
    contrasenia:string;
    idPersona:number;
    idCurso:number;
} */

export interface Curso{
    idCurso:number;
    nombreCurso:string;
    Paralelo:string;
    fotoCurso:string;
    descripcionCurso:string;
    anioLectivo:string;
    idDocente:number;
    fotoPersona:string;
}

export interface Materia{
    idMateria:number;
    nombreMateria:string;
    fotoMateria:string;
    idCurso:number;
    idDocente:number;
    fotoPersona:string;
}

export interface UsuarioD{
    idPersona:number;
    cedulaPersona:string;
    fotoPersona:string;
    primerNombrePersona:string;
    segundoNombrePersona:string;
    primerApellidoPersona:string;
    segundoApellidoPersona:string;
    telefonoPersona:string;
    correoPersona:string;
    edadPersona:Date;
    detalleSexo:string;
}

export interface Material{
    idContenido:number;
    archivoContenidoDocente:string;
    tituloContenido: string;
    descripcionContenido:string;
    fechaDesdeContenido:Date;
    fechaHastaContenido:Date;
    calificaconContenido:number;
    idMateria:number;
    idQuimestre:number;
    idParcial:number;
    idTipoActividad:number;
    actualFechaContenido:Date;
}

export interface Envio{
    idContenido:number;
    idPersona:number;
}