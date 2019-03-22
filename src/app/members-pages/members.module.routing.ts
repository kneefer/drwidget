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
      { path: 'visits', loadChildren: './visits/visits.module#VisitsPageModule' },
      { path: 'examinations', loadChildren: './examinations/examinations.module#ExaminationsPageModule' },
      { path: 'medicines', loadChildren: './medicines/medicines.module#MedicinesPageModule' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembersRoutingModule { }
