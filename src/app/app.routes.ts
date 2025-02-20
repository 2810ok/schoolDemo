import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NofoundComponent } from './nofound/nofound.component';
import { CityAdressComponent } from './city-adress/city-adress.component';
import { Component } from '@angular/core';
export const routes: Routes = [
    {path:'home', loadComponent:() => import('./home/home.component').then(component=>component.HomeComponent)},
    {path:'login',loadComponent:() => import('./login/login.component').then(component=>component.LoginComponent)},
    {path:'', redirectTo:'/home',pathMatch:'full'},
    {path:'city',loadComponent:()=>import('./city-adress/city-adress.component').then(component => component.CityAdressComponent)}
,
    {path:'**', loadComponent:() => import('./nofound/nofound.component').then(component=>component.NofoundComponent) }
    ];
