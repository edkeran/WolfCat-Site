import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-content-info',
  templateUrl: './card-content-info.component.html',
  styleUrls: ['./card-content-info.component.css']
})
export class CardContentInfoComponent {
  qualityMarkImg:string = './assets/qualityMark.svg';
  @Input() subtitle:string = '';
  @Input() cardContentText = '';
}
