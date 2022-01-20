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

if($_SERVER['REQUEST_METHOD']==='GET'){
  if(isset($_GET['id'])){
    //progrmar cuando envia un id
    //localhost/ws61/agenda.php/?id=1
    $cadenaSql="";
    $cadenaSql= $cadenaSql."select p.* ";
    $cadenaSql= $cadenaSql." from persona p ";
    $cadenaSql= $cadenaSql." where per_id=:id";
    $respuestaSql= $dbConn->prepare($cadenaSql);
    $respuestaSql->binValue(':id',$_GET['id']);
    $respuestaSql->execute();
    $respuestaSql->setFetchMode(PDO::FETCH_ASSOC);
    header("HTTP/1.1 200 ok");
    echo json_encode( $respuestaSql->fetchAll());
    exit();
  }

  if(isset($_GET['id'])===false){
    //si no envio parametros
    //localhost/ws61/agenda.php
    $cadenaSql=" select * from persona ";
    $respuestaSql= $dbConn->prepare($cadenaSql);
    $respuestaSql->execute();
    $respuestaSql->setFetchMode(PDO::FETCH_ASSOC);
    header("HTTP/1.1 200 OK");
    echo json_encode( $respuestaSql->fetchAll());
    exit();
  }
}




if($_SERVER['REQUEST_METHOD']==='POST')
{
  //se utiliza para reguistrar
  $data=json_decode(file_get_contents("php://input")); //para capturar informacon
  //data=[{"per_id":"1","per_nombres":"jaime"}]; algo asi devurelve
  $cadenaSql="";
  $cadenaSql=$cadenaSql." INSERT INTO PERSONA(per_nombres,per_apellidos,telefono,per_estado) ";
  $cadenaSql=$cadenaSql." values('" . $data->per_nombres."','".$data->per_apellidos."','".$data->telefono ."','".$data->per_estado."') ";
  $respuestaSql=$dbConn->query($cadenaSql);
  if( $respuestaSql){
    //$data->id=$dbConn->inser_id;
    exit(json_encode($data));
  }else{
    exit(json_encode(array('status'=>'error')));
  }
}

//validar url vacia o id
//validar si se envia otra cosa q no es un id
//crear tabla persona deporte
/* 
[
  {
    "id":"12",
    "asas":[
      {id:asasas},
      {id:asasas}
    ]
  }
]

*/

if($_SERVER['REQUEST_METHOD']==='PUT')
{
  //para modificar (UPDATE)
  if(isset($_GET['id'])){
    //capturar el id (ejemplo id=1)
    $id_per=$_GET['id'];
    $data=json_decode(file_get_contents("php://input"));
    $cadenaSql="";
    $cadenaSql=$cadenaSql."UPDATE PERSONA SET ";
    $cadenaSql=$cadenaSql." per_nombres='". $data->per_nombres."',";
    $cadenaSql=$cadenaSql." per_apellidos='". $data->per_apellidos."',";
    $cadenaSql=$cadenaSql." telefono='". $data->telefono."',";
    $cadenaSql=$cadenaSql." per_estado='". $data->per_estado."'";
    $cadenaSql=$cadenaSql." where per_id=$id_per";
    $respuestaSql=$dbConn->query($cadenaSql);

    if($respuestaSql){
      //$data->id=$dbConn->insert_id;
      exit(json_encode($data));
    }else{
      exit(json_encode(array('status'=>'error')));
    }
  }
    
}

if($_SERVER['REQUEST_METHOD']==='DELETE')
{
    //delete
    if(isset($_GET['id'])){
      $id=$_GET['id'];
      $cadenaSql="";
      $cadenaSql=$cadenaSql." delete from persona ";
      $cadenaSql=$cadenaSql." where per_id=$id";
      $respuestaSql=$dbConn->query($cadenaSql);
      if($respuestaSql){
        //$data->id=$dbConn-insert_id;
        exit(json_encode(array('status'=>'ok')));
      }else{
        exit(json_encode(array('status'=>'error')));
      }
    }

}


?>