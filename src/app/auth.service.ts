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
    this.entrando();
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        this.navCtrl.navigateRoot('motorista-menu')
      })
      .catch(err => {
        console.log('Erro no login',err.message);
        this.presentAlert();
      });
  }

  logout() {
    this.saindo();
    this.firebaseAuth
      .auth
      .signOut();
      this.navCtrl.navigateRoot('home');
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
      message: 'Entrando, aguarde..',
      duration: 3000,
      spinner: 'bubbles'
    });
    await loading.present();
  }

  async saindo() {
    const loading = await this.loadingController.create({
      message: 'Saindo, aguarde..',
      duration: 3000,
      spinner: 'bubbles'
    });
    await loading.present();
  }

}
