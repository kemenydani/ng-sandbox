import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

    @Output() recipeWasSelected = new EventEmitter<Recipe>();

    recipes: Recipe[] = [
        new Recipe('Bread', 'Soft bread', 'https://www.browneyedbaker.com/wp-content/uploads/2016/05/white-bread-51-550.jpg'),
        new Recipe('Bread2', 'Soft bread2', 'https://www.browneyedbaker.com/wp-content/uploads/2016/05/white-bread-51-550.jpg')
    ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
