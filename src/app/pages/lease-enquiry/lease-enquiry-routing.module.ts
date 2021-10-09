import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeaseEnquiryPage } from './lease-enquiry.page';

const routes: Routes = [
  {
    path: '',
    component: LeaseEnquiryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeaseEnquiryPageRoutingModule {}
