import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'dashboard',
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
  {
    path: 'purchase-enquiry',
    loadChildren: () => import('./pages/purchase-enquiry/purchase-enquiry.module').then( m => m.PurchaseEnquiryPageModule)
  },
  {
    path: 'call-back-form',
    loadChildren: () => import('./forms/call-back-form/call-back-form.module').then( m => m.CallBackFormPageModule)
  },
  {
    path: 'enquiry-form-purchase',
    loadChildren: () => import('./forms/enquiry-form-purchase/enquiry-form-purchase.module').then( m => m.EnquiryFormPurchasePageModule)
  },
  {
    path: 'enquiry-form-lease',
    loadChildren: () => import('./forms/enquiry-form-lease/enquiry-form-lease.module').then( m => m.EnquiryFormLeasePageModule)
  },
  {
    path: 'project-input-details',
    loadChildren: () => import('./forms/project-input-details/project-input-details.module').then( m => m.ProjectInputDetailsPageModule)
  },
  {
    path: 'property-input-details',
    loadChildren: () => import('./forms/property-input-details/property-input-details.module').then( m => m.PropertyInputDetailsPageModule)
  },
  {
    path: 'employee-input-details',
    loadChildren: () => import('./forms/employee-input-details/employee-input-details.module').then( m => m.EmployeeInputDetailsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./auth/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'lease-enquiry',
    loadChildren: () => import('./pages/lease-enquiry/lease-enquiry.module').then( m => m.LeaseEnquiryPageModule)
  },
  {
    path: 'locations',
    loadChildren: () => import('./pages/locations/locations.module').then( m => m.LocationsPageModule)
  },
  {
    path: 'budget',
    loadChildren: () => import('./pages/budget/budget.module').then( m => m.BudgetPageModule)
  },
  {
    path: 'property-type',
    loadChildren: () => import('./pages/property-type/property-type.module').then( m => m.PropertyTypePageModule)
  },
  {
    path: 'lead-source',
    loadChildren: () => import('./pages/lead-source/lead-source.module').then( m => m.LeadSourcePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
