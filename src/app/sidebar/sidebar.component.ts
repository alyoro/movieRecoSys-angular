import { Component, OnInit } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { User } from '../_models/user';
import { JwtToken } from '../_models/jwtToken';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  private userName: JwtToken;
  usernameMessage: string;
  loginButton: string;

  constructor() { }
  

  ngOnInit() {
    this.getUsernameDecoded();
  }

  getUsernameDecoded(){
    if(localStorage.getItem('currentUser')){
      try{
         this.userName = jwt_decode(localStorage.getItem('currentUser'));
         this.usernameMessage = "Logged as: "+this.userName.sub+"!";
         this.loginButton = "Logout";
      }
      catch(Error){
        return null;
      }
    }
    else{
      this.loginButton = "Login";
    }
  }

}
