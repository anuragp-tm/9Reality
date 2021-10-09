import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CallBackFormPageRoutingModule } from './call-back-form-routing.module';

import { CallBackFormPage } from './call-back-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CallBackFormPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CallBackFormPage]
})
export class CallBackFormPageModule {}
