import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

// Guardian
import { AdminGuard } from './admin.guard';

const routes: Routes = [
    {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        // component: HomeComponent
        // Para cargar un modulo en vez de un componente
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'previews',
        loadChildren: () => import('./photos/photos.module').then(p => p.PhotosModule)
      },
      {
        path: 'contact',
        // Utilizando el guardian AdminGuard para ver si el usuario
        // puede acceder a esta página
        canActivate: [AdminGuard],
        loadChildren: () => import('./contact/contact.module').then(c => c.ContactModule)
      }
    ]
  },
  {
    path: 'home',
    // component: HomeComponent
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'previews',
    loadChildren: () => import('./photos/photos.module').then(p => p.PhotosModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then(c => c.ContactModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: '**',
    loadChildren: () => import('./page-not-found/page-not-found.module').then(n => n.PageNotFoundModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      preloadingStrategy: PreloadAllModules
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
