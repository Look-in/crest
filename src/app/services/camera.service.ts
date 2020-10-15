import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Camera } from '../model/camera';

@Injectable({
  providedIn: 'root'
})
export class CameraService {

  constructor() {
  }

  getCameras(): Observable<Camera[]> {
    // TODO: remove with httpClient
    return new Observable<Camera[]>((obs) => {
      const camera1 = new Camera();
      camera1.active = !Math.round(Math.random());
      camera1.name = 'Cam1';
      camera1.scr = '/../../assets/temp/cam1.jpg';
      const camera2 = new Camera();
      camera2.active = !Math.round(Math.random());
      camera2.name = 'Cam2';
      camera2.scr = '/../../assets/temp/cam2.jpg';
      const camera3 = new Camera();
      camera3.active = !Math.round(Math.random());
      camera3.name = 'Cam3';
      camera3.scr = '/../../assets/temp/cam3.jpg';
      const camera4 = new Camera();
      camera4.active = !Math.round(Math.random());
      camera4.name = 'Cam4';
      camera4.scr = '/../../assets/temp/cam4.jpg';
      const cameras = [camera1, camera2, camera3, camera4];
      obs.next(cameras);
    });
  }

}
