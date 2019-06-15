import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AlunoSobrePage } from './aluno-sobre.page';

const routes: Routes = [
  {
    path: '',
    component: AlunoSobrePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AlunoSobrePage]
})
export class AlunoSobrePageModule {}
