import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeaseEnquiryPageRoutingModule } from './lease-enquiry-routing.module';

import { LeaseEnquiryPage } from './lease-enquiry.page';
import { HttpClientModule } from '@angular/common/http';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeaseEnquiryPageRoutingModule,
    HttpClientModule,
    NgxDatatableModule
  ],
  declarations: [LeaseEnquiryPage]
})
export class LeaseEnquiryPageModule {}
