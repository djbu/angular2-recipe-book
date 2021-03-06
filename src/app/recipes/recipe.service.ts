import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from '../shared/ingredient';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Dummy', 'Dummy', 'http://corporacion3018.net.ve/res/img/site/Dummy1.jpg', [
      new Ingredient('french fries', 2),
      new Ingredient('pork meat', 1)
    ]),
    new Recipe('Dummy1', 'Dummy1', 'http://corporacion3018.net.ve/res/img/site/Dummy1.jpg', []),
    new Recipe('Dummy2', 'Dummy2', 'http://corporacion3018.net.ve/res/img/site/Dummy1.jpg', [])
  ];

  constructor() { }

  getRecipes () {
    return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

}
