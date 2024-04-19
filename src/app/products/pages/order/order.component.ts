import { Component } from '@angular/core';
import { Animal, Color } from '../../interfaces/animal.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  isUpperCase:boolean = false;
  animals:Animal[]=[
    {
      name:'Nutria',
      canFly: false,
      color: Color.brown
    },
    {
      name:'Cisne',
      canFly: true,
      color: Color.white
    },
    {
      name:'Zorro',
      canFly: false,
      color: Color.orange
    },
    {
      name:'Águila',
      canFly: true,
      color: Color.brown
    },
    {
      name:'Delfín',
      canFly: false,
      color: Color.blue
    },
  ]
  sortBy:keyof Animal | '' = '';

  toggleUpperCase():void{
    this.isUpperCase = !this.isUpperCase
  }

  changeOrder(value: keyof Animal):void{
    this.sortBy = value;
  }
}
