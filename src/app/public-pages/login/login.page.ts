import { Component } from '@angular/core';
import { LoadingController, AlertController } from '@ionic/angular';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  public loading: HTMLIonLoadingElement;
  public loginCreds = { login: '', password: '' };

  constructor(
    private authService: AuthService,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController
  ) { }

  public async login() {
    this.showLoading();
    try {
      const allowed = await this.authService.login(this.loginCreds.login);
      if (!allowed) {
        this.showError('Access Denied');
      }
    } catch (err) {
      this.showError(err);
    }
  }

  private showLoading() {
    this.loadingCtrl.create().then(loading => {
      this.loading = loading;
    });
    this.loading.present();
  }

  private async showError(text) {
    this.loading.dismiss();

    const alert = await this.alertCtrl.create({
      header: 'Fail',
      subHeader: text,
      buttons: ['OK']
    });
    alert.present();
  }
}
