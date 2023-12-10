import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Bus } from 'src/app/Model/bus.model';
import { Operator } from 'src/app/Model/busoperator.model';
import { BusService } from 'src/app/Service/bus/bus.service';
import { OperatorJwtClientService } from 'src/app/Service/operator-jwt/operator-jwt-client.service';
import { TokenServiceService } from 'src/app/Service/token/token-service.service';

@Component({
  selector: 'app-operator-ui',
  templateUrl: './operator-ui.component.html',
  styleUrls: ['./operator-ui.component.css']
})
export class OperatorUiComponent {
  token:any;
  buses: Bus[] = [];
  bus: Bus = new Bus(0, '', 0, '', '', 0, 0, '', 0, new Date());
  operator: Operator=new Operator();

  constructor(private busService:BusService, private router: Router,private tokenservice:TokenServiceService,private operatorService:OperatorJwtClientService) {}



 
  updateBusDetails(bus: Bus) {
   
    this.token=this.tokenservice.getToken();
    this.operatorService.updateBus(this.bus,this.token).subscribe(
      (response) => {
        console.log(response); 
      
        this.router.navigate(['/update-bus', bus.busId]);

      }
    );
    
  }

  getAllBus() {
    this.token=this.tokenservice.getToken();
    this.operatorService.getAllBuses(this.token).subscribe(
      (response) => {
        console.log(response); 
      
        this.router.navigate(['/getAllBus']);

      }
     
    );
  }
  logout() {
   
    this.tokenservice.clearToken();
    this.router.navigate(['/bus-operator-login']);
  }
  updateBusOperator(operatorId: number) {
    const token = this.tokenservice.getToken();

    this.operator.operatorId = operatorId;

    this.operatorService.updateBusOperator(this.operator, token).subscribe(
      (response) => {
       
        this.router.navigate(['/update-busOperator']);
       
      },
      (error) => {
        console.error('Error updating BusOperator:', error);
       
      }
    );
  }
  
}
