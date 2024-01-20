import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IListResponseModel } from '../models/listResponseModel';
import { ICategory } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl = 'https://localhost:7099/api/categories/getall';

  constructor(public httpClient: HttpClient) { }

  getCategories() : Observable<IListResponseModel<ICategory>>{
    return this.httpClient.get<IListResponseModel<ICategory>>(this.apiUrl);
  }
}
