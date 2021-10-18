import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeadSourcePageRoutingModule } from './lead-source-routing.module';

import { LeadSourcePage } from './lead-source.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeadSourcePageRoutingModule
  ],
  declarations: [LeadSourcePage]
})
export class LeadSourcePageModule {}
