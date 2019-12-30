import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'http://img95.699pic.com/photo/50044/9286.jpg_wh300.jpg',
      ingredients: ['French Fries', 'Pork Meat', 'Salad']
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl: 'http://img95.699pic.com/photo/50055/9712.jpg_wh300.jpg',
      ingredients: ['Spaghetti', 'Meat', 'Tomatoes']
    },
  ];

  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {...this.recipes.find(recipe => {
      return recipe.id === recipeId;
    })};
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id === recipeId;
    });
  }
}
