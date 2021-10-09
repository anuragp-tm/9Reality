import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeeInputDetailsPageRoutingModule } from './employee-input-details-routing.module';

import { EmployeeInputDetailsPage } from './employee-input-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmployeeInputDetailsPageRoutingModule
  ],
  declarations: [EmployeeInputDetailsPage]
})
export class EmployeeInputDetailsPageModule {}
