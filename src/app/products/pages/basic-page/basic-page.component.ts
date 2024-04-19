import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrls: ['./basic-page.component.css']
})
export class BasicPageComponent {
  nameLower:string = 'maria jose';
  nameUpper:string = 'MARIA JOSE';
  nameTitle:string = 'MaRiA jOSe';
  customDate: Date = new Date();
}
