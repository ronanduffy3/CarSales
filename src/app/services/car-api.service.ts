import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import {AngularFirestoreCollection, AngularFirestore, AngularFirestoreModule} from '@angular/fire/firestore';

import { ICar } from '../interfaces/car';
import { JsonPipe } from '@angular/common';


@Injectable()

export class CarApiService {

  carsDataCollection:AngularFirestoreCollection<ICar>;

  carsData:Observable<ICar[]>

  allCarsData:ICar[];

  errorMessage: string;


  constructor(private _http:HttpClient, private _afs:AngularFirestore) {  
  this.carsDataCollection=_afs.collection<ICar>("cars_data"); 
  }

  getCarData():Observable<ICar[]>{
    this.carsData = this.carsDataCollection.valueChanges({idField:"id"});
    this.carsData.subscribe(data => console.log("getCatsData"+ JSON.stringify(data)))
    return this.carsData;
  }

  addCarData(car:ICar): void{
    this.carsDataCollection.add(JSON.parse(JSON.stringify(car)));
  }

  delCarData(carId:string): void{

  }

  private handleError(err:HttpErrorResponse){
    console.log('CarApiService' + err.message);
    return Observable.throw(err.message);
    
  }

}
