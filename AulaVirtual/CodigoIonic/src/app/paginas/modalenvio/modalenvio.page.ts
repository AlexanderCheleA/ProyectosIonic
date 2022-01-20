import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Envio } from 'src/app/interfaces/interfaces';

import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { File } from '@ionic-native/file/ngx';


@Component({
  selector: 'app-modalenvio',
  templateUrl: './modalenvio.page.html',
  styleUrls: ['./modalenvio.page.scss'],
})
export class ModalenvioPage implements OnInit {

  ObjetoRecivido:Envio;
  fileTransfer:FileTransferObject;

  constructor(private modalCtrl: ModalController, private navparms: NavParams, private transfer:FileTransfer, private fileChooser:FileChooser, private filePath:FilePath, private filefile:File) { 
    this.ObjetoRecivido= navparms.get('Objetoenvio');
  }
  ngOnInit() {
    console.log(this.ObjetoRecivido);
  }

  cancelar(){
    this.modalCtrl.dismiss();
  }

  

  buscar(){
    /* this.fileChooser.open().then(uri =>{ */ 
      /* =====  verificamos la extension del archivo ======== */
      /* this.filePath.resolveNativePath(uri).then((filePath) => { 
        let path = filePath.substring(0, filePath.lastIndexOf('/')); // ruta archivo
        let file = filePath.substring(filePath.lastIndexOf('/')+1, filePath.length); // archivo
        
        let archivo = file.split("."); 
        let nombreArchivo = archivo[0];
        let extensionArchivo = archivo[1]; */

        /* Extensiones validas  */
        /* if(extensionArchivo=="jpg" ||  extensionArchivo=="pdf" || 
          extensionArchivo=="docx" || extensionArchivo=="xls" || 
          extensionArchivo=="zip" ||  extensionArchivo=="mp4" || 
          extensionArchivo=="mp3")
        { */
          /* ================ cargamos el archivo =============== */ 
          /* var archivoUpload ='scripts/registro_upload.php';
          var url = 'http://192.168.43.209';

          // asignamos un nombre al archivo  
          var fecha = new Date();
          var milisegundos = fecha.getTime();
          var nuevoNombreArchivo = "FILE_NEO_"+ milisegundos + "." + extensionArchivo ;

          const fileTransfer: FileTransferObject = this.transfer.create();
          let options: FileUploadOptions = {
            fileKey: 'txtFile',
            fileName: nuevoNombreArchivo,
            headers: {},
            params: {"app_key":"Neogestion"},
            chunkedMode : false,
            mimeType: "multipart/form-data"
          }
        
          fileTransfer.upload(uri, url, options).then((data) => { */
          // success
           /*  alert("success"+JSON.stringify(data));
          }, (err) => { */
          // error
            /* alert("error"+JSON.stringify(err));
          });
        //================ cargamos el archivo =============== 
        }
      }, (err) => {alert("error"+JSON.stringify(err));})
        //=====  verificamos la extension del archivo ========
        // ============== fin filechooser ============== 
      }).catch(e => console.log(e));   */
      this.fileChooser.open().then((uri)=>{
        this.filePath.resolveNativePath(uri).then(
          (nativepath)=>{
            let path = nativepath.substring(0, nativepath.lastIndexOf('/')); // ruta archivo
            let file = nativepath.substring(nativepath.lastIndexOf('/')+1, nativepath.length); // archivo
            let archivo = file.split("."); 
            let nombreArchivo = archivo[0];
            let extensionArchivo = archivo[1];
  
            /* Extensiones validas  */
            if(extensionArchivo=="jpg" ||  extensionArchivo=="pdf" || 
            extensionArchivo=="docx" || extensionArchivo=="xls" || 
            extensionArchivo=="zip" ||  extensionArchivo=="mp4" || 
            extensionArchivo=="mp3")
            {
  
              var fecha = new Date();
              var milisegundos = fecha.getTime();
              var nuevoNombreArchivo = "FILE_NEO_"+ milisegundos + "." + extensionArchivo ;
              alert("Transferencia correcta = "+JSON.stringify(nuevoNombreArchivo));
              alert("Transferencia correcta = "+JSON.stringify(nombreArchivo));
              alert("Transferencia correcta = "+JSON.stringify(extensionArchivo));

              this.fileTransfer = this.transfer.create();
              let options:FileUploadOptions={
                fileKey: 'txtFile',
                fileName: nuevoNombreArchivo,
                headers: {},
                params: {"app_key":"Neogestion"},
                chunkedMode : false,
                mimeType: "multipart/form-data"
              }
              this.fileTransfer.upload(nativepath, 'URL aqui va la ip', options).then((data) => {
                alert("Transferencia correcta = "+JSON.stringify(data));
              }, (err) => {
                alert("error"+JSON.stringify(err));
              })
           }
          }, (err) => {
            alert("error"+JSON.stringify(err));
          })
        }, (err) => {
          alert("error"+JSON.stringify(err));
        })
  }

  enviar(){
    
    this.cancelar();
  }

}
