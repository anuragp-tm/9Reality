import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskboardPage } from './taskboard.page';

const routes: Routes = [
  {
    path: '',
    component: TaskboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskboardPageRoutingModule {}
