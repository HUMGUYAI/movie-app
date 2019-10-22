import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'battleship', loadChildren: './battleship/battleship.module#BattleshipPageModule' },
  { path: 'alien', loadChildren: './alien/alien.module#AlienPageModule' },
  { path: 'my', loadChildren: './my/my.module#MyPageModule' },
  { path: 'dark-mode', loadChildren: './dark-mode/dark-mode.module#DarkModePageModule' },
  { path: 'index', loadChildren: './index/index.module#IndexPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
