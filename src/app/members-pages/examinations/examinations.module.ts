import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ExaminationsPage } from './examinations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ExaminationsPage
      }
    ])
  ],
  declarations: [
    ExaminationsPage
  ],
  exports: [RouterModule]
})
export class ExaminationsPageModule { }
