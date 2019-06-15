import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'aluno-contato', loadChildren: './aluno/aluno-contato/aluno-contato.module#AlunoContatoPageModule' },
  { path: 'aluno-mapa', loadChildren: './aluno/aluno-mapa/aluno-mapa.module#AlunoMapaPageModule' },
  { path: 'aluno-menu', loadChildren: './aluno/aluno-menu/aluno-menu.module#AlunoMenuPageModule' },
  { path: 'aluno-sobre', loadChildren: './aluno/aluno-sobre/aluno-sobre.module#AlunoSobrePageModule' },
  { path: 'login', loadChildren: './login/login/login.module#LoginPageModule' },
  { path: 'registro', loadChildren: './login/registro/registro.module#RegistroPageModule' },
  { path: 'motorista-mapa', loadChildren: './motorista/motorista-mapa/motorista-mapa.module#MotoristaMapaPageModule' },
  { path: 'motorista-menu', loadChildren: './motorista/motorista-menu/motorista-menu.module#MotoristaMenuPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
