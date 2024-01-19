import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { IProduct } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  products: IProduct[] = [];
  dataLoaded = false;
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() 
  {
    this.productService.getProducts().subscribe((response) => {
      this.products = response.data;
      this.dataLoaded = true;
    });
    
  }
}
