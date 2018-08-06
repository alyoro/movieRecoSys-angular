import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { RecomendationComponent } from './recomendation/recomendation.component';
import { TopListComponent } from './top-list/top-list.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'search', component: SearchComponent},
  {path: 'recomendation', component: RecomendationComponent},
  {path: 'top', component: TopListComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
