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
        $cadenaSql= $cadenaSql."select d.idPersona, p.cedulaPersona, p.fotoPersona, p.primerNombrePersona, p.segundoNombrePersona, p.primerApellidoPersona, p.segundoApellidoPersona, p.telefonoPersona, p.correoPersona, p.edadPersona, s.detalleSexo ";
        $cadenaSql= $cadenaSql." from docente d INNER JOIN persona p ON p.idPersona=d.idPersona INNER JOIN sexo s ON s.idSexo=p.idSexo ";
        $cadenaSql= $cadenaSql." where d.idDocente=:id";
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
