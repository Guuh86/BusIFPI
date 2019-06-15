import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MotoristaMapaPage } from './motorista-mapa.page';

const routes: Routes = [
  {
    path: '',
    component: MotoristaMapaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MotoristaMapaPage]
})
export class MotoristaMapaPageModule {}
