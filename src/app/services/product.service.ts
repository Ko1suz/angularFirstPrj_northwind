import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from '../models/listResponseModel';
import { IProduct } from '../models/product';
@Injectable({
  providedIn: 'root',
})

export class ProductService {
  apiUrl = 'https://localhost:7099/api/products/getall';

  constructor(public httpClient: HttpClient) { }

  getProducts() : Observable<ListResponseModel<IProduct>>{
    return this.httpClient.get<ListResponseModel<IProduct>>(this.apiUrl);
  }
}
