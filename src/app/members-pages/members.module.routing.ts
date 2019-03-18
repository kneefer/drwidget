import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MembersPage } from './members.page';

const routes: Routes = [
  {
    path: '',
    component: MembersPage,
    children: [
      { path: '', redirectTo: '/members/dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule' },
      { path: 'visits', loadChildren: './visits/visits.module#VisitsPageModule' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembersRoutingModule { }
