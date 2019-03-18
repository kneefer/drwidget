import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage {

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
