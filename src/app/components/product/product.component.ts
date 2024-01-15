import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { IProduct } from '../../models/product';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {


  products:IProduct[] = [
  // a
  ];
}
