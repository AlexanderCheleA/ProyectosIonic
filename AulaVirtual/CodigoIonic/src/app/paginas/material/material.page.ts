import { Component, OnInit, ViewChildren, QueryList, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Material, Envio} from 'src/app/interfaces/interfaces';
import { AuthService } from 'src/app/servicios/auth.service';
import { Downloader, NotificationVisibility, DownloadRequest } from '@ionic-native/downloader/ngx';
import { ModalController } from '@ionic/angular';
import { ModalenvioPage } from '../modalenvio/modalenvio.page';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';
import { stringify } from 'querystring';

@Component({
  selector: 'app-material',
  templateUrl: './material.page.html',
  styleUrls: ['./material.page.scss'],
})
export class MaterialPage implements OnInit {

  listaMaterial:Material[];

  contador:boolean=false;
    @ViewChildren('player')videoPlayers: QueryList<any>;
  currentPlaying = null;

  stickyVideo: HTMLVideoElement = null;
  stickyPlaying = false;
  @ViewChild('stickyplayer', {static: false}) stickyPlayer: ElementRef;

  constructor(private streamingMedia: StreamingMedia, private autentificacion:AuthService, private renderer: Renderer2, private dowloader:Downloader, private modalenvio:ModalController) { }

  ngOnInit() {
    /*   this.stickyVideo.muted=false;
      this.contador=false; */
  }

  ionViewDidEnter(){
    console.log(this.autentificacion.getMMaterial());
    this.llenarDataMaterial();
  }

  linkvideo:string="";
  openFullscreen2(item:any){
    this.linkvideo="http://192.168.43.209/"+item.archivoContenidoDocente;
     console.log(this.linkvideo);
     console.log(item.archivoContenidoDocente);
    /* alert('Archivo descargado en:'+this.linkvideo); */

    let options: StreamingVideoOptions = {
      successCallback: () => { console.log('Video played') },
      errorCallback: (e) => { console.log('Error streaming') },
      orientation: 'landscape',
      shouldAutoClose: true,
      controls: true
    };
    
    this.streamingMedia.playVideo(this.linkvideo, options);

  }

  llenarDataMaterial(){
    console.log("Daata recibida");
    console.log(this.autentificacion.getMMaterial());
    this.autentificacion.getMaterial(this.autentificacion.getMMaterial())
    .subscribe(data=>{
      if(data!=null){
        this.listaMaterial=data;
        console.log("respuestaCurso:"+JSON.stringify(data));
        console.log(this.listaMaterial);
      }else{
        console.log("datos  incorrectos deldocente"); 
      }
    });
  }

  Descargar(item:any){
    var dowloaderUrl="http://192.168.43.209/"+item.archivoContenidoDocente;
    console.log("Lo que descargaras");
    console.log(item.archivoContenidoDocente);
    var request: DownloadRequest = {
      uri: dowloaderUrl,
      title: 'Mi Descarga',
      description: 'Descargando archivo',
      mimeType: '',
      visibleInDownloadsUi: true,
      notificationVisibility: NotificationVisibility.VisibleNotifyCompleted,
      destinationInExternalFilesDir: {
          dirType: 'Downloads',
          subPath: ''
      }
    };
    this.dowloader.download(request).then((location: string) => {
      alert('Archivo descargado en:'+location);
    },(err)=>{
      alert(JSON.stringify(err));
    })
  }

  data:number=null;
  async enviar(item:any){
    this.data=item.idContenido;
    console.log(item.idContenido);
    console.log(this.data);
    console.log(this.autentificacion.getPPerfil());
    var idEstu=this.autentificacion.getPPerfil();
    let objEnvio:Envio;
    objEnvio={idContenido:this.data,idPersona:idEstu}
    this.data=null;
    console.log(objEnvio);
    const modal= await this.modalenvio.create({
      component:ModalenvioPage,
      componentProps:{
        Objetoenvio: objEnvio
      }
    }); 
    await modal.present();
  }


  didScroll() {
    if (this.currentPlaying && this.isElementInViewport(this.currentPlaying)){
      return;
    } else if (this.currentPlaying && !this.isElementInViewport(this.currentPlaying)){
      this.currentPlaying.pause();
      this.currentPlaying = null;
    }

    this.videoPlayers.forEach(player => {
      console.log('player: ', player);

      if (this.currentPlaying){
        return;
      }

      const nativeElement = player.nativeElement;
      const inView = this.isElementInViewport(nativeElement);
      
      
      if (this.stickyVideo && this.stickyVideo.src == nativeElement.src){
        return;
      }

      if (inView){
        this.currentPlaying = nativeElement;
        this.currentPlaying.muted = true;
        this.currentPlaying.play();
      }
    });
  }

  openFullscreen(elem){
    if (elem.requestFullscreen){
      elem.requestFullscreen();
    } else if (elem.webkitEnterFullscreen){
      elem.webkitEnterFullscreen();
      elem.enterFullscreen();
    }
  }

  isElementInViewport(el){
    const rect = el.getBoundingClientRect();
    return(
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  playOnSide(elem){
      if (this.stickyVideo){
      this.renderer.removeChild(this.stickyPlayer.nativeElement, this.stickyVideo);
    }
    this,this.stickyVideo = elem.cloneNode(true);

    this.renderer.appendChild(this.stickyPlayer.nativeElement, this.stickyVideo);
  

    if (this.currentPlaying){
      const playPosition = this.currentPlaying.currentTime;
      this.currentPlaying.pause();
      this.currentPlaying = null;
      this.stickyVideo.currentTime = playPosition;
    }
    this.stickyVideo.muted = false;
    this.stickyVideo.play();
    this.stickyPlaying = true;
    }

    closeSticky(){
      if (this.stickyVideo){
        this.renderer.removeChild(this.stickyPlayer.nativeElement, this.stickyVideo);
        this.stickyVideo = null;
        this.stickyPlaying = false;
      }
    }

    playOrPauseSticky() {
      if (this.stickyPlaying){
        this.stickyVideo.pause();
        this.stickyPlaying = false;
      }else{
        this.stickyVideo.play();
        this.stickyPlaying = true;
      }
    }

  audio(){
    if (this.contador==false){
      this.stickyVideo.muted=false;
      this.contador=true;
    }else{
      this.stickyVideo.muted=true;
      this.contador=false;
    }
  }
}
