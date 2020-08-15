import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TempCalculatorComponent } from './components/temp-calculator/temp-calculator.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { TodlistComponent } from './components/todlist/todlist.component';

const routes: Routes = [
  {path: "", component: HomePageComponent},
  {path: "temperature", component: TempCalculatorComponent},
  {path: "todo", component: TodlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
