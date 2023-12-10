import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/Model/admin.model';
import { AdminJwtClientService } from 'src/app/Service/admin-jwt-client.service';
import { TokenServiceService } from 'src/app/Service/token/token-service.service';

@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.css']
})
export class UpdateAdminComponent {

  admin: Admin = new Admin(0, '', '', '', '', ''); 

  constructor(private adminService: AdminJwtClientService, private tokenService: TokenServiceService,private router:Router) {}

  updateAdmin() {
   
    const token = this.tokenService.getToken(); 

    this.adminService.updateAdmin(this.admin, token).subscribe(
      (response) => {
        console.log('Admin updated:', response);
        this.router.navigate(['/adminUI']);
    
      },
      (error) => {
        console.error('Error updating admin:', error);
       
      }
    );
  }

}
