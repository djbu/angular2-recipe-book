import { Injectable } from '@angular/core';
import { Recipe } from './recipe';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Dummy', 'Dummy', 'http://corporacion3018.net.ve/res/img/site/Dummy1.jpg', []),
    new Recipe('Dummy1', 'Dummy1', 'http://corporacion3018.net.ve/res/img/site/Dummy1.jpg', []),
    new Recipe('Dummy2', 'Dummy2', 'http://corporacion3018.net.ve/res/img/site/Dummy1.jpg', [])
  ];

  constructor() { }

  getRecipes () {
    return this.recipes;
  }

}
