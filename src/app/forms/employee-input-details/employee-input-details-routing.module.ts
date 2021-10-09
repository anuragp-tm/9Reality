import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeInputDetailsPage } from './employee-input-details.page';

const routes: Routes = [
  {
    path: '',
    component: EmployeeInputDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeInputDetailsPageRoutingModule {}
