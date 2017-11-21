import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/do';

import { IProduct } from './product';

@Injectable()
export class ProductService {
    private _productUrl = './api/products/products.json';
    constructor(private _http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(this._productUrl)
        .catch(this.handleError);
  }

}
