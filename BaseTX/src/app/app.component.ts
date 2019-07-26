import { Component, OnInit  } from '@angular/core';
//import { MessagingService } from './services/messaging.service';
import { SiglaService } from 'src/app/services/sigla.service';
import { NgxUiLoaderService } from 'ngx-ui-loader'; // Import NgxUiLoaderService
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '';
  constructor(// private msgService: MessagingService,
              private siglaS: SiglaService,
              private ngxService: NgxUiLoaderService) {
  }

  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    // this.msgService.requestPermission();
    // tslint:disable-next-line: max-line-length
    if (environment.production === true) {
      this.siglaS.consultarSigla().subscribe((res: any) => {
        localStorage.setItem('mtxuser', JSON.stringify(res[0]));
      });
    } else {
      // tslint:disable-next-line: max-line-length
      localStorage.setItem('mtxuser', '{"id":0,"name":"LOPEZ O. MANUEL [PROV]|c.mlopeo","imagen":"data:image/jpg;base64,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","sigla":"c.mlopeo","position":null,"esLider":false,"habilitarEdicion":false,"idRol":0,"descRol":null,"mail":"c.mlopeo@ternium.com.mx"}');
    }


    this.ngxService.start(); // start foreground loading with 'default' id
    // Stop the foreground loading after 5s
    setTimeout(() => {
      this.ngxService.stop(); // stop foreground loading with 'default' id
    }, 2000);
  }
}
