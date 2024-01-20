import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IListResponseModel } from '../models/listResponseModel';
import { IProduct } from '../models/product';
@Injectable({
  providedIn: 'root',
})

export class ProductService {
  apiUrl = 'https://localhost:7099/api/';

  constructor(public httpClient: HttpClient) { }

  getProducts() : Observable<IListResponseModel<IProduct>>{
    let newPath = this.apiUrl + "products/getall"
    return this.httpClient.get<IListResponseModel<IProduct>>(newPath);
  }

  getProductsByCategory(categoryId : number) : Observable<IListResponseModel<IProduct>>{
    let newPath = this.apiUrl + "products/getbycategory?categoryId="+categoryId
    return this.httpClient.get<IListResponseModel<IProduct>>(newPath);
  }
}
