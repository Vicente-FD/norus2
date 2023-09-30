import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApivistaPage } from './apivista.page';

const routes: Routes = [
  {
    path: '',
    component: ApivistaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApivistaPageRoutingModule {}
