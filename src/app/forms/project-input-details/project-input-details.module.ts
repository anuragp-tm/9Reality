import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjectInputDetailsPageRoutingModule } from './project-input-details-routing.module';

import { ProjectInputDetailsPage } from './project-input-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjectInputDetailsPageRoutingModule
  ],
  declarations: [ProjectInputDetailsPage]
})
export class ProjectInputDetailsPageModule {}
