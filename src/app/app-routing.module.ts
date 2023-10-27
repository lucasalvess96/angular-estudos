import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '/bem-vindo',
    loadChildren: () => import('./bem-vindo/bem-vindo.module').then((m) => m.BemVindoModule),
    data: {
      breadcrumb: {
        label: 'Bem-vindo',
        disable: true,
      },
    },
  },
  {
    path: '',
    redirectTo: 'bem-vindo',
    pathMatch: 'full',
  },
  {
    path: '**',
    loadChildren: () => import('./bem-vindo/bem-vindo.module').then((m) => m.BemVindoModule),
    data: {
      breadcrumb: {
        label: 'Bem-vindo',
        disable: true,
      },
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
