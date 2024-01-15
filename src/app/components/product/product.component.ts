import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { IProduct } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { HttpClient } from '@angular/common/http';
import { IProductResponseModel } from '../../models/productResponseModel';
import { response } from 'express';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  // apiUrl = 'https://localhost:7099/api/products/getall';
  products: IProduct[] = [];

  constructor(private productService: ProductService) {}
  // constructor(private httpClient:HttpClient) {}

  ngOnInit(): void {
    this.getProducts();
  }

  // getProducts()
  // {
  //   this.httpClient.get<IProductResponseModel>(this.apiUrl)
  //   .subscribe((response)=>{
  //     this.products = response.data;
  //   })
  // }
  getProducts() 
  {
    console.log('Api Request Başladı');
    this.productService.getProducts().subscribe((response) => {
      this.products = response.data;
    });
    console.log('Metod Bitti');
  }
}
