import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CallBackFormPage } from './call-back-form.page';

const routes: Routes = [
  {
    path: '',
    component: CallBackFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CallBackFormPageRoutingModule {}
