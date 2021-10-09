import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnquiryFormLeasePageRoutingModule } from './enquiry-form-lease-routing.module';

import { EnquiryFormLeasePage } from './enquiry-form-lease.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnquiryFormLeasePageRoutingModule
  ],
  declarations: [EnquiryFormLeasePage]
})
export class EnquiryFormLeasePageModule {}
