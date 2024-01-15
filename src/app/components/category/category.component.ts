import { Component } from '@angular/core';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  category1: any = { categoryId: 1, productName: 'Bardak'  , price: 5 }
  category2: any = { productId:  2, productName: 'Laptop'  , price: 5 }
  category3: any = { productId:  3, productName: 'Mouse'   , price: 5 }
  category4: any = { productId:  4, productName: 'Keyboard', price: 5 }
  category5: any = { productId:  5, productName: 'Camera'  , price: 5 }

  categorys = [
    this.category1,
    this.category2,
    this.category3,
    this.category4,
    this.category5
  ];
}
