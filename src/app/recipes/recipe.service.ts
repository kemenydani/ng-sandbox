import {Recipe} from './recipe-list/recipe.model';
import { Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs';

@Injectable()
export class RecipeService{

    recipesChanged: Subject = new Subject<Recipe[]>();

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

    addRecipe(recipe: Recipe){
      this.recipes.push(recipe);
      this.recipesChanged.next(this.recipes.slice());
    }

    getRecipe(index: number){
      return this.recipes[index];
    }

    updateRecipe(index: numbner, recipe: Recipe){
      this.recipes[index] = recipe;
      this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number){
      this.recipes.splice(index, 1);
      this.recipesChanged.next(this.recipes.slice());
    }

}
