import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PropertyInputDetailsPage } from './property-input-details.page';

const routes: Routes = [
  {
    path: '',
    component: PropertyInputDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropertyInputDetailsPageRoutingModule {}
