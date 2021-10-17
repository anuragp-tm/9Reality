import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeadSourcePage } from './lead-source.page';

const routes: Routes = [
  {
    path: '',
    component: LeadSourcePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeadSourcePageRoutingModule {}
