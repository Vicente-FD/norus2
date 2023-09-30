import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApivistaPageRoutingModule } from './apivista-routing.module';

import { ApivistaPage } from './apivista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApivistaPageRoutingModule
  ],
  declarations: [ApivistaPage]
})
export class ApivistaPageModule {}
