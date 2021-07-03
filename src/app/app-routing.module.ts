import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginUserComponent } from './login-user/login-user.component';
import { LoginEngineerComponent } from './login-engineer/login-engineer.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'login-user', component: LoginUserComponent },
  { path: 'login-engineer', component: LoginEngineerComponent },
  { path: 'forget-password', component: ForgetPasswordComponent },
  { path: '', redirectTo: '/signup',  pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
