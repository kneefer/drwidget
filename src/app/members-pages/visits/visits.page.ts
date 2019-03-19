import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-visits',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>WIZYTY</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding fullscreen>
    </ion-content>
  `
})
export class VisitsPage {
  constructor(
    public toastController: ToastController
  ) { }
}
