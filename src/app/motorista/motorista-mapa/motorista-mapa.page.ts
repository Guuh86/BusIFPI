import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { NavController, Platform } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';

import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

declare var google;

@Component({
  selector: 'app-motorista-mapa',
  templateUrl: './motorista-mapa.page.html',
  styleUrls: ['./motorista-mapa.page.scss'],
})
export class MotoristaMapaPage implements OnInit {
  @ViewChild('map') mapElement: ElementRef;
  map: any;

  markers = [];

  lat: number;
  lng: number;
  myloc: any;

  constructor(
    public navCtrl: NavController,
    private platform: Platform,
    private geolocation: Geolocation,
    private localNotifications: LocalNotifications
  ) {
    this.platform.ready().then(() => {
      this.startService();
    })
  }

  ngOnInit() {
    this.iniciarRota();
  }

  iniciarRota() {
    var currentTime = new Date();
    this.localNotifications.schedule({
      title: 'BusIFPI - Aviso de Rota',
      text: 'Atenção alunos! O motorista acabou de inciar uma rota, fiquem atentos ao mapa.',
      icon: '../../../assets/img/bus.png',
      data: currentTime,
    });
  }

  startService() {
    this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 5000, enableHighAccuracy: true }).then((resp) => {
      let mylocation = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
      this.map = new google.maps.Map(this.mapElement.nativeElement, {
        zoom: 15,
        center: mylocation,
        disableDefaultUI: true
      });
    });
    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      this.deleteMarkers();
      let updatelocation = new google.maps.LatLng(data.coords.latitude, data.coords.longitude);
      let image = 'assets/img/bus.png';
      this.addMarker(updatelocation, image);
      this.setMapOnAll(this.map);
    });
  }

  addMarker(location, image) {
    let marker = new google.maps.Marker({
      position: location,
      map: this.map,
      icon: image
    });
    this.markers.push(marker);
  }

  setMapOnAll(map) {
    for (var i = 0; i < this.markers.length; i++) {
      this.markers[i].setMap(map);
    }
  }

  clearMarkers() {
    this.setMapOnAll(null);
  }

  deleteMarkers() {
    this.clearMarkers();
    this.markers = [];
  }
}