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

//validacion
/* $miurl = "http://localhost/archivosphp/cargarmateria.php";
$urlS = $_SERVER["HTTP_HOST"] . $_SERVER["REQUEST_URI"];
$direccion = "http://" . $urlS; */

if($_SERVER['REQUEST_METHOD']==='GET'){
    //$data=json_decode(file_get_contents("php://input")); //para capturar informacon
    if(isset($_GET['id'])){
          
        $cadenaSql="";
        $cadenaSql= $cadenaSql."select m.idMateria, m.nombreMateria, m.fotoMateria, m.idCurso,m.idDocente, p.fotoPersona ";
        $cadenaSql= $cadenaSql." from materia m INNER JOIN docente d ON m.idDocente=d.idDocente INNER JOIN persona p ON p.idPersona=d.idPersona ";
        $cadenaSql= $cadenaSql." where m.idCurso=:id";
        $respuestaSql= $dbConn->prepare($cadenaSql);
        $respuestaSql->bindValue(':id',$_GET['id']);
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
    }/* 
    if($direccion===$miurl){
        exit();
    }else{
        echo('El id o la url son invalidos');
    } */
}

?>
