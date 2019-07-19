import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    // private recipes: Recipe[] = [
    //     new Recipe('Panchos',
    //         'Test Recipe', 
    //         'https://live.staticflickr.com/4145/5076302395_6af8554c00_b.jpg',
    //         [
    //             new Ingredient('Suspictious origin processed meat', 34),
    //             new Ingredient('Vienna Bread', 1)
    //         ]),
    //     new Recipe('Giso', 
    //         'Test Recipe 2', 
    //         'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Guiso_de_alb%C3%B3ndigas_de_bacalao_con_alcachofas.jpg/1200px-Guiso_de_alb%C3%B3ndigas_de_bacalao_con_alcachofas.jpg',
    //         [
    //             new Ingredient('Potato', 2),
    //             new Ingredient('Rice', 1)
    //         ])
    // ];
    private recipes: Recipe[];

    constructor(private slService: ShoppingListService) { }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number){
        return this.recipes[index];
    }

    setRecipes(recipes: Recipe[]){
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number){
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }

}