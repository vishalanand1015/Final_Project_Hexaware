import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/user.model';
import { AdminJwtClientService } from 'src/app/Service/admin-jwt-client.service';
import { TokenServiceService } from 'src/app/Service/token/token-service.service';
import { UserJwtClientService } from 'src/app/Service/user-jwt/user-jwt-client.service';

@Component({
  selector: 'app-user-ui',
  templateUrl: './user-ui.component.html',
  styleUrls: ['./user-ui.component.css']
})
export class UserUiComponent {
  loggedInUsername: string = '';
 
  
  showBookingComponent: boolean = false; 
 
   
   
 constructor(private jwtService: UserJwtClientService,private router:Router,private tokenservice:TokenServiceService,private userService:AdminJwtClientService) {
  this.loggedInUsername = this.jwtService.loggedInUsername;
}
 onSearch(eventData: any) {
  
   this.showBookingComponent = true;
 }
 
 onSubmit(sourceCity: string, destinationCity: string, date: string) {
   const formattedDate = this.formatDate(date);
 
   this.router.navigate(['/book-bus'], { queryParams: { sourceCity, destinationCity, date: formattedDate } });
 }
 
 formatDate(dateString: string): string {
   const date = new Date(dateString);
   const year = date.getFullYear();
   const month = (date.getMonth() + 1).toString().padStart(2, '0'); 
   const day = date.getDate().toString().padStart(2, '0'); 
 
   return `${year}-${month}-${day}`;
 }
 logout() {
  
  this.tokenservice.clearToken();
  this.router.navigate(['/user-login']);
}
onUpdateUser() {
  
  this.router.navigate(['/user-update']);
}


  
}