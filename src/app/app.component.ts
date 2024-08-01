import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {KeycloakService} from "keycloak-angular";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(
    private keycloakService : KeycloakService
  ){}
  ngOnInit(): void {
    console.log(this.keycloakService.isLoggedIn())

    if (this.keycloakService.isLoggedIn()) {
      this.keycloakService.getToken().then(token => {
        //console.log('accessToken', token);
        sessionStorage.setItem("accessToken",token);
      }).catch(err => console.error('Error getting token:', err));

      // Retrieve the refresh token (if needed)
      // this.keycloakService.getKeycloakInstance().refreshToken().then(refreshToken => {
      //   console.log('Refresh Token:', refreshToken);
      // }).catch(err => console.error('Error getting refresh token:', err));

      // Retrieve the user profile
      this.keycloakService.loadUserProfile().then(profile => {
        //console.log('userInfos', profile);
        sessionStorage.setItem("userInfos",JSON.stringify(profile));
      }).catch(err => console.error('Error loading user profile:', err));
    }


    // .then((loggedIn) => {
    //   if (loggedIn) {
    //     // Retrieve the access token
    //     this.keycloakService.getToken().then(token => {
    //       console.log('Access Token:', token);
    //     }).catch(err => console.error('Error getting token:', err));

    //     // Retrieve the refresh token (if needed)
    //     this.keycloakService.getKeycloakInstance().refreshToken().then(refreshToken => {
    //       console.log('Refresh Token:', refreshToken);
    //     }).catch(err => console.error('Error getting refresh token:', err));

    //     // Retrieve the user profile
    //     this.keycloakService.loadUserProfile().then(profile => {
    //       console.log('User Profile:', profile);
    //     }).catch(err => console.error('Error loading user profile:', err));
    //   } else {
    //     this.keycloakService.login();
    //   }
    // });
  }
}
