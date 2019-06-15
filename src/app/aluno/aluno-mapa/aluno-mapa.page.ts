import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Platform, LoadingController } from '@ionic/angular';

declare var google: any;

@Component({
  selector: 'app-aluno-mapa',
  templateUrl: './aluno-mapa.page.html',
  styleUrls: ['./aluno-mapa.page.scss'],
})
export class AlunoMapaPage implements OnInit {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  address:string;
  waypoints = [];

  isTracking = false;
  
  constructor(
    private geolocation: Geolocation,
    private platform: Platform,
    public loadingController: LoadingController
    ){}

  async ngOnInit(){
    this.initMap();
  }
    
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;

  initMap() {
    const position = new google.maps.LatLng(-2.9304862,-41.8007037);
 
    const mapOptions = {
      zoom: 12,
      center: position,
      disableDefaultUI: true
    }
 
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    this.directionsDisplay.setMap(this.map);

  }

  async loadingManha() {
    const loading = await this.loadingController.create({
      message: 'Carregando a rota...',
      duration: 2000
    });
    await loading.present();
  }

  async loadingNoite() {
    const loading = await this.loadingController.create({
      message: 'Carregando a rota...',
      duration: 3500
    });
    await loading.present();
  }

  rotaManha(){
    this.isTracking = true;
    this.directionsService.route({
      origin: new google.maps.LatLng(-2.9476372,-41.731816),
      destination: new google.maps.LatLng(-2.9471243,-41.7325108),
      waypoints: [
        {location: '-2.9280857, -41.7535305'},
        {location: '-2.918631,-41.7538021'},
        {location: '-2.9104843,-41.7536163'},
        {location: '-2.9095623,-41.7541675'},
        {location: '-2.9092732,-41.7597013'},
        {location: '-2.908802,-41.7725397'},
        {location: '-2.9083968,-41.7783028'},
        {location: '-2.9084561,-41.7800984'},
        {location: '-2.914414,-41.7804418'},
        {location: '-2.916791,-41.7718795'},
        {location: '-2.9178817,-41.7685078'},
        {location: '-2.9184596,-41.7672336'},
      ],
      travelMode: 'DRIVING'
    },(response, status) => {
      if(status == 'OK'){
        this.directionsDisplay.setDirections(response);
      }else{
        window.alert('Direção não adquirida' + status);
      }
    });
  }

  rotaNoite(){
    this.directionsService.route({
      origin: new google.maps.LatLng(-2.9476372,-41.731816),
      destination: new google.maps.LatLng(-2.9471243,-41.7325108),
      waypoints: [
        {location: '-2.9206203,-41.7298345'},
        {location: '-2.9201517,-41.7343433'},
        {location: '-2.919146,-41.754001'},
        {location: '-2.9104843,-41.7536163'},
        {location: '-2.9095623,-41.7541675'},
        {location: '-2.9092732,-41.7597013'},
        {location: '-2.9083968,-41.7783028'},
        {location: '-2.9084561,-41.7800984'},
        {location: '-2.914414,-41.7804418'},
        {location: '-2.916791,-41.7718795'},
        {location: '-2.9185955,-41.7667086'}
      ],
      travelMode: 'DRIVING'
    },(response, status) => {
      if(status == 'OK'){
        this.directionsDisplay.setDirections(response);
      }else{
        window.alert('Direção não adquirida' + status);
      }
    });
    this.isTracking = false;
  }
}

/*loadMap() {
    this.geolocation.getCurrentPosition().then((resp) => {
      let latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true
      }
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      this.directionsDisplay.setMap(this.map);
      /*
      var locations = [
        ['IFPI - Campus Parnaíba', -2.9476372,-41.731816, 14],
        ['Terminal Rodoviário de Parnaíba', -2.9280857,-41.7535305, 13],
        ['Feira da Caramuru', -2.918631,-41.7538021, 12],
        ['Mirante', -2.9104843,-41.7536163, 11],
        ['UFDPar', -2.9095623,-41.7541675, 10],
        ['Conselho Tutelar de Parnaíba', -2.9092732,-41.7597013, 9],
        ['Igreja São Sebastião', -2.908802,-41.7725397, 8],
        ['SENAI - Parnaíba', -2.9083968,-41.7783028, 7],
        ['Pax União', -2.9084561,-41.7800984, 6],
        ['Central de Flagrantes', 2.914414,-41.7804418, 5],
        ['Colégio Estadual Lima Rebelo', -2.916791,-41.7718795, 4],
        ['Mercantil Neres - Guarita', -2.9178817,-41.7685078, 3],
        ['Tem Pão - Guarita', -2.9185955,-41.7667086, 2],
        ['Praça Chico Berto', -2.9212186,-41.7627877, 1],
      ];

      var infowindow = new google.maps.InfoWindow();
      var marker, i;

      for (i = 0; i < locations.length; i++) {  
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(locations[i][1], locations[i][2]),
          map: this.map,
          animation: google.maps.Animation.DROP,
        });
      
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
          return function() {
            infowindow.setContent(locations[i][0]);
            infowindow.open(this.map, marker);
          }
        })(marker, i));
      }
    
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  });
  }
  */
  /*
  calcRotas(){
    this.directionsService.route({
      origin: new google.maps.LatLng(-2.9476372,-41.731816),
      destination: new google.maps.LatLng(-2.9212186,-41.7627877),
      waypoints: [
        {location: '-2.9280857, -41.7535305'},
        {location: '-2.9280857,-41.7535305'},
        {location: '-2.918631,-41.7538021'},
        {location: '-2.9104843,-41.7536163'},
        {location: '-2.9095623,-41.7541675'},
        {location: '-2.9092732,-41.7597013'},
        {location: '-2.908802,-41.7725397'},
        {location: '-2.9083968,-41.7783028'},
        {location: '-2.9084561,-41.7800984'},
        {location: '-2.914414,-41.7804418'},
        {location: '-2.916791,-41.7718795'},
        {location: '-2.9178817,-41.7685078'},
        {location: '-2.9185955,-41.7667086'}
      ],
      travelMode: 'DRIVING'
    },(response, status) => {
      if(status == 'OK'){
        this.directionsDisplay.setDirections(response);
      }else{
        window.alert('Direção não adquirida' + status);
      }
    });
  }
  */
