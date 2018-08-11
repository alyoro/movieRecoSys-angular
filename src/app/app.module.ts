import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatGridListModule} from '@angular/material';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LogoComponent } from './logo/logo.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { TopListComponent } from './top-list/top-list.component';
import { RecoComponent } from './reco/reco.component';
import { AppRoutingModule } from './app-routing.module';
import { MoviesComponent } from './movies/movies.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    LogoComponent,
    SearchComponent,
    LoginComponent,
    TopListComponent,
    RecoComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatGridListModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
