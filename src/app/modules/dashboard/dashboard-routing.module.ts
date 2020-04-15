import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';


const routes: Routes = [
  {
    path: '',
    pathMatch:'full',
    redirectTo: 'dashboard'
  },
  {
    path:'',
    component:DashboardComponent,
    children:[
      {
        path:'forms',
        loadChildren:() => import('./forms/forms.module')
        .then(r => r.FormsModule)
      }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
