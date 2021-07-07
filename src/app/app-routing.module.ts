import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from '../app/home/home.component';
import {LoginComponent} from '../app/Auth/login/login.component';
import {RegisterComponent} from '../app/Auth/register/register.component';





const routes: Routes = [{path:'',redirectTo:'/home' ,pathMatch:'full'},{path:'home',component:HomeComponent},
{path:'**',component:PageNotFoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[HomeComponent,PageNotFoundComponent,RegisterComponent]
