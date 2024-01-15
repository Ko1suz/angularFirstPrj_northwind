import { Injectable } from '@angular/core';
import { IProductResponseModel } from '../models/productResponseModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})

export class ProductService {
  apiUrl = 'https://localhost:7099/api/products/getall';

  constructor(private httpClient: HttpClient) { }

  getProducts() : Observable<IProductResponseModel>{
    return this.httpClient.get<IProductResponseModel>(this.apiUrl);
  }
}
