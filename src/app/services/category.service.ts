import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ICategory } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl = 'https://localhost:7099/api/categories/getall';

  constructor(public httpClient: HttpClient) { }

  getCategories() : Observable<ListResponseModel<ICategory>>{
    return this.httpClient.get<ListResponseModel<ICategory>>(this.apiUrl);
  }
}
