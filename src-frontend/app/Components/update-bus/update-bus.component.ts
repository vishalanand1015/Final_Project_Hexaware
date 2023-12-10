import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bus } from 'src/app/Model/bus.model';
import { BusService } from 'src/app/Service/bus/bus.service';
import { OperatorJwtClientService } from 'src/app/Service/operator-jwt/operator-jwt-client.service';
import { TokenServiceService } from 'src/app/Service/token/token-service.service';

@Component({
  selector: 'app-update-bus',
  templateUrl: './update-bus.component.html',
  styleUrls: ['./update-bus.component.css']
})
export class UpdateBusComponent {

  bus: Bus = new Bus(0, '', 0, '', '', 0, 0, '', 0, new Date());

  constructor(
    private busService: OperatorJwtClientService,
    private route: ActivatedRoute,
    private router: Router,
    private tokenService:TokenServiceService
  ) {}

  


  updateBusDetails() {
    const token = this.tokenService.getToken()
    console.log(token);
    this.busService.updateBus(this.bus,token).subscribe(() => {
      console.log('bus updated');
     
    }, (error) => {
     
      console.error(error);
    });
}
}
