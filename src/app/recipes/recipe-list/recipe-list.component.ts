import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Dummy', 'Dummy', 'http://corporacion3018.net.ve/res/img/site/Dummy1.jpg', []),
    new Recipe('Dummy1', 'Dummy1', 'http://corporacion3018.net.ve/res/img/site/Dummy1.jpg', []),
    new Recipe('Dummy2', 'Dummy2', 'http://corporacion3018.net.ve/res/img/site/Dummy1.jpg', [])
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  //recipe = new Recipe('Dummy', 'Dummy', 'http://corporacion3018.net.ve/res/img/site/Dummy1.jpg');

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
