import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is a simple test', 'https://code.visualstudio.com/assets/blogs/2016/09/08/seti-icon-theme.png'),
    new Recipe('A test recipe', 'This is a simple test', 'https://code.visualstudio.com/assets/blogs/2016/09/08/seti-icon-theme.png')
  ];

  constructor() { }

  ngOnInit() {
  }

}
