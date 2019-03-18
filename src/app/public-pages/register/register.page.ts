import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {

  constructor(
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
}
