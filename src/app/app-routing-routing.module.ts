import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { ListClientsComponent } from './pages/clients/list-clients/list-clients.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'client', 
    component: ListClientsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingRoutingModule { }
