import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MedicinesPage } from './medicines.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: MedicinesPage
      }
    ])
  ],
  declarations: [
    MedicinesPage
  ],
  exports: [RouterModule]
})
export class MedicinesPageModule { }
