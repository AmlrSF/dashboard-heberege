import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { MainComponent } from './pages/main/main.component';
import { ListClientsComponent } from './pages/clients/list-clients/list-clients.component';
import { AddClientComponent } from './pages/clients/add-client/add-client.component';
import { ClientDetailComponent } from './pages/clients/client-detail/client-detail.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    MainComponent,
    ListClientsComponent,
    AddClientComponent,
    ClientDetailComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
