import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TempCalculatorComponent } from './components/temp-calculator/temp-calculator.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { AboutComponent } from './components/about/about.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserLoginComponent } from './components/user-login/user-login.component';

const routes: Routes = [
  {path: "", component: HomePageComponent},
  {path: "temperature", component: TempCalculatorComponent},
  {path: "todo", component: TodolistComponent},
  {path: 'about', component: AboutComponent},
  {path: 'user/register', component: UserRegisterComponent},
  {path: 'user/list', component: UserListComponent},
  {path: 'user/login', component: UserLoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
