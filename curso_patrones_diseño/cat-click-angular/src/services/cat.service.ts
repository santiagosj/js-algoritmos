import { Injectable } from '@angular/core';
import {Cat} from '../model/model'
import {CATS} from '../model/mock-cat'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatService {
  
  selectedCat:Cat;
  
  constructor() { }
  
  getCats():Observable<Cat[]>{
    return of(CATS)
  }
  
}

