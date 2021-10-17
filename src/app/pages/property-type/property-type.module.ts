import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PropertyTypePageRoutingModule } from './property-type-routing.module';

import { PropertyTypePage } from './property-type.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PropertyTypePageRoutingModule
  ],
  declarations: [PropertyTypePage]
})
export class PropertyTypePageModule {}
