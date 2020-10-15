import { Component, OnDestroy, OnInit } from '@angular/core';
import { Camera } from '../../model/camera';
import { CameraService } from '../../services/camera.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss']
})
export class CameraComponent implements OnInit, OnDestroy {

  cameras: Camera[] = [];

  private interval: any;

  subscription: Subscription;

  constructor(private cameraService: CameraService) {
  }

  ngOnInit(): void {
    this.interval = setInterval(() => this.subscription = this.cameraService.getCameras()
      .subscribe(data => this.cameras = data), 2000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
    this.subscription.unsubscribe();
  }

}
