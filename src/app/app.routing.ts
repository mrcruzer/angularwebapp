import { ModuleWithProviders } from '@angular/core';

import {Routes, RouterModule} from '@angular/router';

import { HomeComponent } from './components/home.component';
import { ErrorComponent } from './components/error.component';
import { ProductosListComponent } from './components/productos-list.component';
import { ProductosAddComponent } from './components/productos-add.component';
import { ProductoDetailsComponent } from './components/productos-details.component';
import { ProductoEditComponent } from './components/productos-edit.component';

const appRoutes: Routes = [
    
    {path: '', component: HomeComponent },
    {path: 'home', component: HomeComponent},
    {path: 'productos-list', component: ProductosListComponent},
    {path: 'productos-add', component: ProductosAddComponent },
    {path: 'productos/:id', component: ProductoDetailsComponent },
    {path: 'productos-edit/:id', component: ProductoEditComponent},
    /* Recibira un parametro */ 
    {path: '**', component: ErrorComponent}
];

export const appRoutingProviders: any [] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);