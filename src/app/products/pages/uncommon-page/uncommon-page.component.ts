import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

type gender = 'male'|'female';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})

export class UncommonPageComponent {
  //i18nSelect
  name:string = "María José";
  gender: gender = "female";
  invitationMap = {
    male:"invitarlo",
    female:"invitarla"
  }

  changeClient():void{
    this.name = "Carlos";
    this.gender = "male"
  }

  //i18nPlural
  clientes: string[] = ["Maria","Pedro","Fernando","Hernando","Luis","Carlos","Sofia","Luisa","Paula"];
  clientsMap = {
    '=0':"no tenemos ningún cliente esperando",
    '=1':"tenemos un cliente esperando",
    '=2':"tenemos 2 clientes esperando",
    'other':"tenemos # clientes esperando",
  }

  deleteClient():void{
    this.clientes.pop()
  }

  //KeyValue
  persona = {
    name:"María José",
    age:23,
    address:"Bogotá,Colombia"
  }

  //Async
  myObservableTimer = interval(2000).pipe(
    tap(value => console.log('tap:', value))
  );

  myPromise:Promise<string> = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve('Tenemos data en la promesa')
    },3500)
  })
}
