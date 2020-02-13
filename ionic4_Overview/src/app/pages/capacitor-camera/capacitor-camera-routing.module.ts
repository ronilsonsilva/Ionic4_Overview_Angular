import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CapacitorCameraPage } from './capacitor-camera.page';

const routes: Routes = [
  {
    path: '',
    component: CapacitorCameraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CapacitorCameraPageRoutingModule {}
