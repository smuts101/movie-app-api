import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'movies-list',
    pathMatch: 'full'
  },
  {
    path: 'movies-list',
    loadChildren: () => import('./pages/movies-list/movies-list.module').then( m => m.MoviesListPageModule)
  },
  {
    path: 'movie-details',
    loadChildren: () => import('./pages/movie-details/movie-details.module').then( m => m.MovieDetailsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
