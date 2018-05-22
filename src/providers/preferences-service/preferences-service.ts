import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FuelPreferencesModel } from '../../models/preferences-model';
import { FuelPreferences } from '../../models/mock-preferences';
import { Storage } from '@ionic/storage';
/*
  Generated class for the PreferencesServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PreferencesServiceProvider {

  public fuelPreferences:FuelPreferencesModel[] = FuelPreferences;

  constructor(public http: HttpClient,private storage:Storage) {
    console.log('Hello PreferencesServiceProvider Provider');

  }

  defaultPreferences(){
    this.storage.get('fuelpreference').then((value)=>{
      if (!value){
        this.storage.set('fuelpreference',new FuelPreferencesModel(2,"Gasoleo B","Precio Gasoleo A",true));
      }
    })
    
  }

  getPreferences(){
      return new Promise(resolve=>{
        this.storage.get('fuelpreference').then((value)=>{
          console.log(value);
          resolve(value);
        })
      })
  }

  checkPreferences(){
    this.storage.get('fuelpreference').then((value)=>{
      if (value){
        this.fuelPreferences.forEach((fuelstation)=>{
            if (fuelstation.id == value.id) fuelstation.selected = true;
            else fuelstation.selected = false;
        })
      } else {
        console.log("No hay en local");
      }
    })
  }

  savePreferences(type:number){
    this.fuelPreferences.forEach((fuelstation)=>{
      if (fuelstation.id == type) {
        this.storage.set('fuelpreference',fuelstation);
        }
      })
  }

}
