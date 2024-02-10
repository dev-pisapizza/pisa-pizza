import { Routes } from '@angular/router';
import { DrinksComponent } from './drinks/drinks.component';
import { PackagesComponent } from './packages/packages.component';
import { PastaComponent } from './pasta/pasta.component';
import { PizzasComponent } from './pizzas/pizzas.component';
import { SaladsComponent } from './salads/salads.component';

const baseTitle = 'Pisa Pizza';
export const routes: Routes = [
  {
    path: '',
    component: PizzasComponent,
    pathMatch: 'full',
  },
  {
    path: 'pizzas',
    component: PizzasComponent,
    title: `${baseTitle} / Pizzas`,
  },
  {
    path: 'pasta',
    component: PastaComponent,
    title: `${baseTitle} / Pasta`,
  },
  {
    path: 'salads',
    component: SaladsComponent,
    title: `${baseTitle} / Salate`,
  },

  {
    path: 'packages',
    component: PackagesComponent,
    title: `${baseTitle} / Pakete`,
  },
  { path: 'drinks', component: DrinksComponent, title: `${baseTitle} / Getränke` },
  { path: '**', redirectTo: 'pizzas' },
];
