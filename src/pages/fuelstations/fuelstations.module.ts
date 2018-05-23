import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FuelstationsPage } from './fuelstations';

@NgModule({
  declarations: [
    FuelstationsPage,
  ],
  imports: [
    IonicPageModule.forChild(FuelstationsPage),
  ],
})
export class FuelstationsPageModule { }
