import { Component } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {

  ingredients: Ingredient[] = [
      new Ingredient('Salt', 10),
      new Ingredient('Pepper', 20)
  ];

  onIngredientAdded(ingredient: Ingredient){
      this.ingredients.push(ingredient);
  }

}
