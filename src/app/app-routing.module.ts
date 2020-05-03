import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { EmpFormComponent } from './emp-form/emp-form.component';

const routes: Routes = [
  {
    path: "form", component: FormComponent
  },
  {
    path: "emp-form", component: EmpFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
