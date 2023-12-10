import { Component,OnInit} from '@angular/core';
import { Admin } from '../../Model/admin.model';
import { AdminService } from '../../Service/admin.service';
import { AdminJwtClientService } from 'src/app/Service/admin-jwt-client.service';
import { TokenServiceService } from 'src/app/Service/token/token-service.service';
import { Router } from '@angular/router';
import { UserJwtClientService } from 'src/app/Service/user-jwt/user-jwt-client.service';
import { OperatorJwtClientService } from 'src/app/Service/operator-jwt/operator-jwt-client.service';
import { OperatorService } from 'src/app/Service/operator-jwt/operator.service';

@Component({
  selector: 'app-admin-ui',
  templateUrl: './admin-ui.component.html',
  styleUrls: ['./admin-ui.component.css']
})
export class AdminUIComponent {
  token: any; // Define the token property
  admin: Admin = {
    adminId: 0,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phoneNumber: '',
  };
 


  constructor(private router:Router,private adminService: AdminJwtClientService,private tokenservice:TokenServiceService,private busService:OperatorService ) {}

  getalladmins() {
    this.token=this.tokenservice.getToken();
    this.adminService.alladmins(this.token).subscribe(
      (response) => {
        console.log(response); // Display the response in the console
      
        this.router.navigate(['/display-all-admin']);

      }
     
    );
  }
  
 
  
  updateAdmin(adminId: number) {
    const token = this.tokenservice.getToken();

    this.admin.adminId = adminId;

    this.adminService.updateAdmin(this.admin, token).subscribe(
      (response) => {
       
        this.router.navigate(['/update-admin']);
        // Handle success scenario if needed
      },
      (error) => {
        console.error('Error updating admin:', error);
        // Handle error scenario if needed
      }
    );
  }
 

  createBus(){
  
        this.router.navigate(['/add-bus']);
    
  }
  
  logout() {
    // Clear the token when logging out
    this.tokenservice.clearToken();
    this.router.navigate(['/admin']);
  }
  getallUsers() {
    this.token=this.tokenservice.getToken();
    this.adminService.allUsers(this.token).subscribe(
      (response) => {
        console.log(response); // Display the response in the console
      
        this.router.navigate(['/getAllUsers']);
  
      }
     
    );
  }
  getallOperator() {
    this.token=this.tokenservice.getToken();
    this.adminService.allBusOperators(this.token).subscribe(
      (response) => {
        console.log(response); // Display the response in the console
      
        this.router.navigate(['/getAllOperator']);
  
      }
     
    );
  }

}
