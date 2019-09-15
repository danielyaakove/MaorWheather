import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { FavorietComponent } from './shared/favoriet/favoriet.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'favoriet', component: FavorietComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
