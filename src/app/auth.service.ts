import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { NavController, AlertController, LoadingController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<firebase.User>;

  constructor(
    private firebaseAuth: AngularFireAuth,
    private navCtrl: NavController,
    public alertController: AlertController,
    public loadingController: LoadingController
    ) {
    this.user = firebaseAuth.authState;
  }

  login(email: string, password: string) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Você está logado!');
        this.entrando();
        this.navCtrl.navigateRoot('motorista-menu')
      })
      .catch(err => {
        console.log('Erro no login',err.message);
        this.presentAlert();
      });
  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      message: 'E-mail ou senha estão incorretos!',
      buttons: ['OK']
    });
    await alert.present();
  }

  async entrando() {
    const loading = await this.loadingController.create({
      message: 'Entrando no ônibus, aguarde..',
      duration: 2000
    });
    await loading.present();
  }

}
