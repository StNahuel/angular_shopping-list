import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";


const appRoutes: Routes = [
  { path: "", redirectTo: "/shopping-list", pathMatch: "full" },
  //Lazy load for recipes section
  { path: "recipes", loadChildren: './recipes/recipes.module#RecipesModule' },
  { path: "shopping-list", loadChildren: './shopping-list/shopping-list.module#ShoppingListModule' },
  { path: "auth", loadChildren: './auth/auth.module#AuthModule' }
  /*
    Angular 8 lazy load example:
    { path: 'recipes', loadChildren: () => import('./module-path/module.name').then(m => m.ModuleName)}
  */
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
