import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnquiryFormLeasePage } from './enquiry-form-lease.page';

const routes: Routes = [
  {
    path: '',
    component: EnquiryFormLeasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnquiryFormLeasePageRoutingModule {}
