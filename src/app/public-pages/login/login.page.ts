import { Component } from '@angular/core';
import { LoadingController, AlertController, MenuController } from '@ionic/angular';
import { AuthService } from './../../services/auth.service';
import { UserDataService } from 'src/app/services/user-data.service';

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
    private loadingCtrl: LoadingController,
    private menuCtrl: MenuController
  ) { }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
    this.menuCtrl.get().then(menu => menu.swipeGesture = false);
  }

  ionViewWillLeave() {
    this.menuCtrl.enable(true);
    this.menuCtrl.get().then(menu => menu.swipeGesture = true);
  }

  public async login() {
    await this.toggleLoading();
    try {
      const allowed = await this.authService.login(this.loginCreds.login, this.loginCreds.password);
      if (!allowed) {
        this.showError('Access Denied');
      }
    } catch (err) {
      this.showError(err);
    }
    await this.toggleLoading();
  }

  private async toggleLoading() {
    if (this.loading) {
      this.loading.dismiss();
      this.loading = undefined;
    } else {
      this.loading = await this.loadingCtrl.create();
      this.loading.present();
    }
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
