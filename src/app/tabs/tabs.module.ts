import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';
import { Tab1Page } from './tab1.page';
import { Tab2Page } from './tab2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: TabsPage,
        children: [
          {
            path: 'tab1',
            component: Tab1Page
          },
          {
            path: 'tab2',
            component: Tab2Page
          },
          {
            path: '',
            redirectTo: '/tabs/tab1'
          }
        ]
      }
    ])
  ],
  declarations: [
    TabsPage,
    Tab1Page,
    Tab2Page
  ]
})
export class TabsModule { }
