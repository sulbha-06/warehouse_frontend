import { Injectable } from '@angular/core';
import { ProductMockData } from 'src/app/data/ProductData';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductlistService {

  constructor() { }
  get(){
    return of(ProductMockData);
    console.log(ProductMockData);
    
  }
}
