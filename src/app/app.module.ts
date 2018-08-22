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
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '../../node_modules/@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { JwtInterceptor } from './_helpers/jwt.interceptors';
import { ErrorInterceptor } from './_helpers/error.interceptor';


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
    MoviesComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatGridListModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
