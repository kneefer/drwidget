import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-examinations',
  templateUrl: './examinations.page.html',
  styleUrls: ['./examinations.page.scss'],
})
export class ExaminationsPage {
  constructor(
    public toastController: ToastController
  ) { }
}
