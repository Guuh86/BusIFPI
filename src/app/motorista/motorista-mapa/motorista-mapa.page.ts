import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Subscription, Observable } from 'rxjs';
import { NavController, Platform } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { filter, last } from 'rxjs/operators';

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
  
  
  /*
  isTracking = false;
  trackedRoute = [];
  previousTracks = [];
  currentMapTrack = null;
  positionSubscription: Subscription;
  */

  constructor(
    public navCtrl: NavController, 
    private platform: Platform,
    private geolocation: Geolocation,
    ) {}

    ngOnInit(){
      this.platform.ready().then(() => {
        this.initMapAndStartTracking();
      })
    }

    initMapAndStartTracking(){
      this.geolocation.getCurrentPosition({
        enableHighAccuracy: true
      }).then((resp) => {
        let mylocation = new google.maps.LatLng(
          resp.coords.latitude,
          resp.coords.longitude);
        this.map = new google.maps.Map(this.mapElement.nativeElement, {
          zoom: 15,
          center: mylocation,
        });
      });
      let watch = this.geolocation.watchPosition();
      watch.subscribe((data) => {
        this.deleteMarkers();
        let updatelocation = new google.maps.LatLng(
          data.coords.latitude,
          data.coords.longitude);
        let image = 'assets/img/bus.png';
        this.addMarker(updatelocation,image);
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
    
    
    
    
    
    /*
    loadMap(){
      let mapOptions = {
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false
      }
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
 
      this.geolocation.getCurrentPosition().then(pos => {
         this.lat =  pos.coords.latitude;
         this.log = pos.coords.longitude;
        this.map.setCenter({lat: this.lat, lng: this.log});
        this.map.setZoom(16);
        new google.maps.Marker({
          position: {lat: this.lat, lng: this.log},
          map: this.map,
          animation: 'DROP'
        })
        console.log(this.lat, this.log)
      }).catch((error) => {
        console.log('Erro ao recuperar a sua localização!', error);
      });
    }
    
  
    startTracking() {
      this.isTracking = true;
      this.trackedRoute = [];
   
      this.positionSubscription = this.geolocation.watchPosition()
        .pipe(
          filter((p) => p.coords !== undefined) //Filter Out Errors
        )
        .subscribe(data => {
          setTimeout(() => {
            this.trackedRoute.push({ lat: data.coords.latitude, lng: data.coords.longitude });
            this.redrawPath(this.trackedRoute);
          }, 0);
        });
   
    }



  
    redrawPath(path) {
      if (this.currentMapTrack) {
        this.currentMapTrack.setMap(null);
      }
      if (path.length > 1) {
        this.currentMapTrack = new google.maps.Polyline({
          path: path,
          geodesic: true,
          strokeColor: '#ff0000',
          strokeOpacity: 1.0,
          strokeWeight: 3
        });
        this.currentMapTrack.setMap(this.map);
      }
    }
    

    stopTracking() {
      let newRoute = { finished: new Date().getTime(), path: this.trackedRoute };
      this.previousTracks.push(newRoute);
      this.storage.set('routes', this.previousTracks);
     
      this.isTracking = false;
      this.positionSubscription.unsubscribe();
      this.currentMapTrack.setMap(null);
    }

    showHistoryRoute(route) {
      this.redrawPath(route);
    }
    */

  

}