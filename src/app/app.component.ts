import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CategoryComponent } from "./components/category/category.component";
import { ProductComponent } from "./components/product/product.component";
import { NaviComponent } from "./components/navi/navi.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, CategoryComponent, ProductComponent, NaviComponent]
})
export class AppComponent {
  title: string = 'northwind';
  user: string = 'Engin Demiroğ';
 
}

