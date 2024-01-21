import { Component, OnInit } from '@angular/core';
import { ICategory } from '../../models/category';
import { CategoryService } from '../../services/category.service';
import { response } from 'express';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent implements OnInit {
  categories: ICategory[] = [];
  currentCategory : ICategory;
  nullCategory : ICategory;
  dataLoaded = false;
  constructor(private categoryService: CategoryService) {}
  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategories().subscribe((response) => {
      this.categories = response.data;
      this.dataLoaded = true;
    });
  }

  setCurrentCategory( category : ICategory) {
    this.currentCategory = category;
  }

  setCurrentCategoryNull() {
    return  this.currentCategory = this.nullCategory;
  }

  getCurrentCategoryClass(category : ICategory)
  {
    if (category == this.currentCategory) {
      return "list-group-item active"
    } else{
      return "list-group-item"
    }
  }

  getAllCategoryClass()
  {
    if (!this.currentCategory) {
      return "list-group-item active"
    } else{
      return "list-group-item"
    }
  }
}
