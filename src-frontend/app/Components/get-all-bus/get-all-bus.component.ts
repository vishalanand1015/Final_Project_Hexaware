import { Component } from '@angular/core';
import { Bus } from 'src/app/Model/bus.model';
import { OperatorJwtClientService } from 'src/app/Service/operator-jwt/operator-jwt-client.service';
import { TokenServiceService } from 'src/app/Service/token/token-service.service';

@Component({
  selector: 'app-get-all-bus',
  templateUrl: './get-all-bus.component.html',
  styleUrls: ['./get-all-bus.component.css']
})
export class GetAllBusComponent {

  busList: Bus[] = [];

  constructor(private operatorService:OperatorJwtClientService,private tokenService: TokenServiceService) { }

  ngOnInit() {
    this.fetchAdmins();
  }
  fetchAdmins() {
    const token = this.tokenService.getToken();
    this.operatorService.getAllBuses(token).subscribe(
      (buses: Bus[]) => {
        this.busList = buses;
      }
      
    );
  }
  deleteBus(busId: number) {
    const token = this.tokenService.getToken(); 
    this.operatorService.deleteBus(busId, token).subscribe(
      (response) => {
        console.log('Bus deleted:', response);
        
      },
      (error) => {
        console.error('Error deleting Bus:', error);
       
      }
    );
  }

}
