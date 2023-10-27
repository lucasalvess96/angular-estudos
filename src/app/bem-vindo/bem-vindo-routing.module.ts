import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BemVindoComponent } from './pages/bem-vindo/bem-vindo.component';

const routes: Routes = [
  {
    path: '',
    component: BemVindoComponent,
    data: {
      breadcrumb: {
        label: 'Boas vindas',
      },
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class BemVindoRoutingModule {}
