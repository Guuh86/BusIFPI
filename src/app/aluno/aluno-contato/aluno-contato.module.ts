import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AlunoContatoPage } from './aluno-contato.page';

const routes: Routes = [
  {
    path: '',
    component: AlunoContatoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AlunoContatoPage]
})
export class AlunoContatoPageModule {}
