import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild(IonSlides) slider: IonSlides;

  constructor() {}

  ngOnInit() {
    this.slider.startAutoplay();
  }
}
