import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PurchaseEnquiryPageRoutingModule } from './purchase-enquiry-routing.module';

import { PurchaseEnquiryPage } from './purchase-enquiry.page';
import { HttpClientModule } from '@angular/common/http';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PurchaseEnquiryPageRoutingModule,
    HttpClientModule,
    NgxDatatableModule
  ],
  declarations: [PurchaseEnquiryPage]
})
export class PurchaseEnquiryPageModule {}
