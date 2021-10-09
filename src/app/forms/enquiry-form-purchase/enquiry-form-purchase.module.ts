import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnquiryFormPurchasePageRoutingModule } from './enquiry-form-purchase-routing.module';

import { EnquiryFormPurchasePage } from './enquiry-form-purchase.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnquiryFormPurchasePageRoutingModule
  ],
  declarations: [EnquiryFormPurchasePage]
})
export class EnquiryFormPurchasePageModule {}
