import { Component, Input } from '@angular/core';
import { Camera } from '../../../model/camera';

@Component({
  selector: 'app-camera-template',
  templateUrl: './camera-template.component.html',
  styleUrls: ['./camera-template.component.scss']
})
export class CameraTemplateComponent {

  @Input() camera: Camera;

  getActiveIcon(): string {
    return this.camera?.active ? 'url(\'/../../assets/images/active.jpg\')' : 'url(\'/../../assets/images/inactive.jpg\')';
  }

}
