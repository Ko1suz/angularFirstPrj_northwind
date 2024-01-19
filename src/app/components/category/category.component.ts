import { Component, OnInit } from '@angular/core';
import { ICategory } from '../../models/category';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit{

  categories : ICategory[] = [];
  constructor() {}
  ngOnInit(): void {
  }

}
