import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { match } from 'assert';
import { FormsComponent } from './forms.component';


const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'forms'
  },
  {
    path:'',
    component: FormsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
