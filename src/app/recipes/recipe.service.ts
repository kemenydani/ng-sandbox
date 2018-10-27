import {Recipe} from './recipe-list/recipe.model';
import { Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{

    private recipes: Recipe[] = [
        new Recipe(
            'Bread',
            'Soft bread',
            'https://www.browneyedbaker.com/wp-content/uploads/2016/05/white-bread-51-550.jpg',
            [
                new Ingredient('Salt', 1),
                new Ingredient('Pepper', 2)
            ]
        ),
        new Recipe(
            'Bread2',
            'Soft bread2',
            'https://www.browneyedbaker.com/wp-content/uploads/2016/05/white-bread-51-550.jpg',
            [
                new Ingredient('Salt', 1),
                new Ingredient('Pepper', 2)
            ]
        )
    ];

    constructor(private shoppingListService: ShoppingListService){}

    getRecipe(index: number){
      return this.recipes[index];
    }

    getRecipes(){
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    }

}
