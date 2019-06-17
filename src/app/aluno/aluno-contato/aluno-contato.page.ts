import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';



@Component({
  selector: 'app-aluno-contato',
  templateUrl: './aluno-contato.page.html',
  styleUrls: ['./aluno-contato.page.scss'],
})
export class AlunoContatoPage implements OnInit {
  cc= '';
  body= '';

  constructor(
    private iab: InAppBrowser,
    private email: EmailComposer,
  ) { }

  ngOnInit() {
  }

  openFacebook(){
    this.iab.create('https://fb.gg/samiraclose/');
  }

  openWpp(){
    this.iab.create('https://chat.whatsapp.com/GYcAlaCD1hz1DpgDxlPcVP');
  }

  openMail(){
    let email = {
      to: 'guh86@outlook.com',
      cc: this.cc,
      body: this.body,
      isHtml: true
    }
    this.email.open({app:'gmail'});  
  }

}
