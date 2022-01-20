<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE');
header('content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, content-Type, Accept');

//importar mis librerias
include "config.php";
include "utilitarios.php";

//conectar con la base de datos 
$dbConn= connect($db);

//idCurso

if($_SERVER['REQUEST_METHOD']==='POST'){
    $data=json_decode(file_get_contents("php://input")); //para capturar informacon
    if(isset($data->idCurso)){
        //$cadenaSql="SELECT c.idCurso, c.nombreCurso, c.Paralelo, c.fotoCurso, c.descripcionCurso, c.anioLectivo, c.idDocente, p.fotoPersona FROM curso c INNER JOIN docente d ON c.idDocente=d.idDocente INNER JOIN persona p ON p.idPersona=d.idPersona WHERE c.idCurso=1";
        $cadenaSql="";
        $cadenaSql= $cadenaSql."select c.idCurso, c.nombreCurso, c.Paralelo, c.fotoCurso, c.descripcionCurso, c.anioLectivo, c.idDocente, p.fotoPersona ";
        $cadenaSql= $cadenaSql." from curso c INNER JOIN docente d ON c.idDocente=d.idDocente INNER JOIN persona p ON p.idPersona=d.idPersona ";
        $cadenaSql= $cadenaSql." where c.idCurso=$data->idCurso";
        $respuestaSql= $dbConn->prepare($cadenaSql);
        $respuestaSql->execute();
        $contador=$respuestaSql->rowCount();
        $respuestaSql->setFetchMode(PDO::FETCH_ASSOC);
        header("HTTP/1.1 200 OK");
        if($respuestaSql){
            if($contador > 0){
                $variabledata=json_encode($respuestaSql->fetchAll(), JSON_UNESCAPED_UNICODE);
                exit(str_replace("\\/","/",$variabledata));
                exit();
            }else{
            /* echo json_encode("El curso no existe"); */
            exit(null);
            }
        }else{
            exit(json_encode(array('status'=>'error')));
        }
    }else{
        exit(null);
    }
}

?>
