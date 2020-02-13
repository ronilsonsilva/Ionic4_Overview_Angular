import { Component, OnInit } from "@angular/core";
import { PhotoService } from "src/app/services/capacitor/photo.service";

@Component({
  selector: "app-capacitor-camera",
  templateUrl: "./capacitor-camera.page.html",
  styleUrls: ["./capacitor-camera.page.scss"]
})
export class CapacitorCameraPage implements OnInit {
  constructor(public photoService: PhotoService) {}

  ngOnInit() {
    this.photoService.loadSaved();
  }
}
