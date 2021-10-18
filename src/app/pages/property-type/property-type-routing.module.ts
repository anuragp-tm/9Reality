import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PropertyTypePage } from './property-type.page';

const routes: Routes = [
  {
    path: '',
    component: PropertyTypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropertyTypePageRoutingModule {}
