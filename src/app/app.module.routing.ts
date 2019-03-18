import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', loadChildren: './public-pages/welcome/welcome.module#WelcomePageModule' },
  { path: 'login', loadChildren: './public-pages/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './public-pages/register/register.module#RegisterPageModule' },
  {
    path: 'members',
    canActivate: [AuthGuard],
    loadChildren: './members-pages/members.module#MembersModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
