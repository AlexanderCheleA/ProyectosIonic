import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './componentes/menu/menu.component';

import{HttpClientModule} from '@angular/common/http';
import { Downloader } from '@ionic-native/downloader/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { File } from '@ionic-native/file/ngx';
import { StreamingMedia } from '@ionic-native/streaming-media/ngx';

@NgModule({
  declarations: [AppComponent,MenuComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule
  ],
  exports:[MenuComponent],
  providers: [
    StatusBar,
    SplashScreen,
    FileTransfer,
    FileChooser,
    FilePath,
    File,
    StreamingMedia,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, Downloader
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
