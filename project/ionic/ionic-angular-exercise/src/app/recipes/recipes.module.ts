import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { RecipesPage } from './recipes.page';
import { RouterModule, Routes } from '@angular/router';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';

const routes: Routes = [
  {
    path: '',
    component: RecipesPage
  }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RecipesPage, RecipeItemComponent]
})
export class RecipesPageModule {}
