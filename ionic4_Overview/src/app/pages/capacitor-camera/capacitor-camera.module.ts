import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CapacitorCameraPageRoutingModule } from './capacitor-camera-routing.module';

import { CapacitorCameraPage } from './capacitor-camera.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CapacitorCameraPageRoutingModule
  ],
  declarations: [CapacitorCameraPage]
})
export class CapacitorCameraPageModule {}
