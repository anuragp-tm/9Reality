import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PropertyInputDetailsPageRoutingModule } from './property-input-details-routing.module';

import { PropertyInputDetailsPage } from './property-input-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PropertyInputDetailsPageRoutingModule
  ],
  declarations: [PropertyInputDetailsPage]
})
export class PropertyInputDetailsPageModule {}
