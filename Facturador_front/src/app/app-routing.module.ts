import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';

import { ClienteComponent } from '../app/componentes/cliente/cliente.component';


const routes: Routes = [
  {
    path : '',
    component : HomeComponent,
    pathMatch : 'full'
  },
  
  {
    path : 'login',
    component : HomeComponent,
    pathMatch : 'full'
  },
  { path: 'clientes', component: ClienteComponent },

  
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
