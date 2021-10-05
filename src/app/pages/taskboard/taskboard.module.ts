import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaskboardPageRoutingModule } from './taskboard-routing.module';

import { TaskboardPage } from './taskboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaskboardPageRoutingModule
  ],
  declarations: [TaskboardPage]
})
export class TaskboardPageModule {}
