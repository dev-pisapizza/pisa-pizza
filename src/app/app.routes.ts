import { Routes } from '@angular/router';
import { DrinksComponent } from './drinks/drinks.component';
import { PackagesComponent } from './packages/packages.component';
import { PastaComponent } from './pasta/pasta.component';
import { PizzasComponent } from './pizzas/pizzas.component';
import { SaladsComponent } from './salads/salads.component';

export const routes: Routes = [
  {
    path: '',
    component: PackagesComponent,
  },
  {
    path: 'packages',
    component: PackagesComponent,
  },
  {
    path: 'pizzas',
    component: PizzasComponent,
  },
  {
    path: 'salats',
    component: SaladsComponent,
  },
  {
    path: 'pasta',
    component: PastaComponent,
  },
  { path: 'drinks', component: DrinksComponent },
];
