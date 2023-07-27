import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent {
    imagen:string = './assets/logoCompanie.svg';
    ancho:Number = 150;
    alto:Number = 150;
}
