import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthRequest } from 'src/app/Model/AuthRequest';
import { TokenServiceService } from 'src/app/Service/token/token-service.service';
import { UserJwtClientService } from 'src/app/Service/user-jwt/user-jwt-client.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  

  response: any;
  token: any;
  authRequest: AuthRequest = new AuthRequest();

  constructor(private jwtService:UserJwtClientService, private router:Router,private tokenService:TokenServiceService){}

  ngOnInit(): void {
   
  }

  readFormData(formData: any) {
    if (formData.valid) {
      this.authRequest.username = formData.value.username;
      this.authRequest.password = formData.value.password;

      this.getAccessToken(this.authRequest);
    } else {
      
      alert('Please fill in the required fields.');
    }
  }

  public getAccessToken(authRequest: any) {
    let response = this.jwtService.getGeneratedToken(authRequest);

    response.subscribe((genToken) => {
      this.token = genToken;
      this.tokenService.setToken(this.token);
      this.router.navigate(['/userUI']);
      this.jwtService.loggedInUsername = authRequest.username;
      
    });
  }

 

  
}
