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

//de la estudiante  6 id curso 2
// 0964444444
//serelaizo el cambio a usuario y contraseña 1 y 1

if($_SERVER['REQUEST_METHOD']==='POST'){
  $data=json_decode(file_get_contents("php://input")); //para capturar informacon
  if(isset($data->usuario) && isset($data->contrasenia)){
    $cadenaSql="SELECT * FROM estudiante Where usuarioEstudiante='$data->usuario' AND contrasenaEstudiante='$data->contrasenia'";
    $respuestaSql= $dbConn->prepare($cadenaSql);
    $respuestaSql->execute();
    $contador=$respuestaSql->rowCount();
    $respuestaSql->setFetchMode(PDO::FETCH_ASSOC);
    header("HTTP/1.1 200 OK");
    if($respuestaSql){
      if($contador > 0){
        echo json_encode($respuestaSql->fetchAll());
        exit();
      }else{
        /* echo json_encode("Usuario o contraseña incorrecto"); */
        exit(null);
      }
    }else{
      exit(json_encode(array('status'=>'error')));
    }
  }else{
    exit(json_encode("Error no se envio ningun dato"));
  }
  
  
}

?>