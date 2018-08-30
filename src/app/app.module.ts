import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatGridListModule, MatInputModule, MatAutocompleteModule, MatCardModule, MatTableModule, MatPaginatorModule, MatCardTitle} from '@angular/material';


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
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { JwtInterceptor } from './_helpers/jwt.interceptors';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { RegisterComponent } from './register/register.component';
import { AlertService } from './_services/alert.service';
import { AuthGuard } from './_guards/auth.guard';
import { AuthenticationService } from './_services/authentication.service';
import { UserService } from './_services/user.service';
import { AlertComponent } from './_directives/alert.component';
import { SearchFormComponent } from './search-form/search-form.component';


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
    MovieDetailComponent,
    RegisterComponent,
    AlertComponent,
    SearchFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatGridListModule,
    MatInputModule,
    MatAutocompleteModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AlertService,
    AuthGuard,
    AuthenticationService,
    UserService,

    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
