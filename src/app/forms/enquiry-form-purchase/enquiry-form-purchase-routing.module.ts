import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnquiryFormPurchasePage } from './enquiry-form-purchase.page';

const routes: Routes = [
  {
    path: '',
    component: EnquiryFormPurchasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnquiryFormPurchasePageRoutingModule {}
