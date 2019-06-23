import { Component, OnInit } from '@angular/core';

import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

import { AuthService } from 'src/app/auth.service';


@Component({
  selector: 'app-motorista-menu',
  templateUrl: './motorista-menu.page.html',
  styleUrls: ['./motorista-menu.page.scss'],
})
export class MotoristaMenuPage implements OnInit {

  constructor(private localNotifications: LocalNotifications, public authService: AuthService) { }


  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }

  semRota() {
    var currentTime = new Date();
    this.localNotifications.schedule({
      title: 'BusIFPI - Aviso de Rota',
      text: 'Atenção alunos! Não haverá rota do ônibus hoje!',
      icon: '../../../assets/img/bus.png',
      data: currentTime,
    });
  }

  onibusDanificado(){
    var currentTime = new Date();
    this.localNotifications.schedule({
      title: 'BusIFPI - Aviso de Rota',
      text: 'Atenação alunos! O ônibus do instituto está danificado, portanto, não haverá rota até que seja concluido o repado.',
      icon: '../../../assets/img/bus.png',
      data: currentTime
    })
  }

}
