import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { VisitsPage } from './visits.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: VisitsPage
      }
    ])
  ],
  declarations: [
    VisitsPage
  ],
  exports: [RouterModule]
})
export class VisitsPageModule { }
