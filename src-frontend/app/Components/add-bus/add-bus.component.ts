import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Bus } from 'src/app/Model/bus.model';
import { AdminJwtClientService } from 'src/app/Service/admin-jwt-client.service';
import { AdminService } from 'src/app/Service/admin.service';
import { TokenServiceService } from 'src/app/Service/token/token-service.service';

@Component({
  selector: 'app-add-bus',
  templateUrl: './add-bus.component.html',
  styleUrls: ['./add-bus.component.css']
})
export class AddBusComponent {

  specificDate: string;
  bus: Bus = new Bus(0, '', 0, '', '', 0, 0, '', 0, new Date());

  constructor(private adminService: AdminJwtClientService, private router: Router,private tokenService: TokenServiceService) {
    const currentDate = new Date();
    this.specificDate = this.formatDate(currentDate);

   
    this.bus = new Bus(0, '', 0, '', '', 0, 0, '', 0, currentDate);
  }

  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }

  createBus() {
    const token = this.tokenService.getToken();
    this.adminService.createBus(this.bus,token)
      .subscribe(
        (response) => {
          console.log('Bus added successfully!', response);
        });
  }
}
