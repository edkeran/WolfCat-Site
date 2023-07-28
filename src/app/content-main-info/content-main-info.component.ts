import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-main-info',
  templateUrl: './content-main-info.component.html',
  styleUrls: ['./content-main-info.component.css']
})
export class ContentMainInfoComponent {
  qualityMarkImg:string = './assets/qualityMark.svg';
  @Input() titulo:string = '';
  
}
