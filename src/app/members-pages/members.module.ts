import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MembersRoutingModule } from './members.module.routing';
import { MembersPage } from './members.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    MembersRoutingModule
  ],
  declarations: [
    MembersPage
  ]
})
export class MembersModule { }
