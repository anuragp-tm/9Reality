import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'taskboard',
    loadChildren: () => import('./pages/taskboard/taskboard.module').then( m => m.TaskboardPageModule)
  },
  {
    path: 'property',
    loadChildren: () => import('./pages/property/property.module').then( m => m.PropertyPageModule)
  },
  {
    path: 'setup',
    loadChildren: () => import('./pages/setup/setup.module').then( m => m.SetupPageModule)
  },
  {
    path: 'project',
    loadChildren: () => import('./pages/project/project.module').then( m => m.ProjectPageModule)
  },
  {
    path: 'authentication',
    loadChildren: () => import('./pages/authentication/authentication.module').then( m => m.AuthenticationPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
