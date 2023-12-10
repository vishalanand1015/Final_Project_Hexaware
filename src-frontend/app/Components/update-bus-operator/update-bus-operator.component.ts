import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Operator } from 'src/app/Model/busoperator.model';
import { OperatorJwtClientService } from 'src/app/Service/operator-jwt/operator-jwt-client.service';
import { TokenServiceService } from 'src/app/Service/token/token-service.service';

@Component({
  selector: 'app-update-bus-operator',
  templateUrl: './update-bus-operator.component.html',
  styleUrls: ['./update-bus-operator.component.css']
})
export class UpdateBusOperatorComponent {

  operator: Operator = new Operator(); 

  constructor(private operatorService: OperatorJwtClientService, private tokenService: TokenServiceService,private router:Router) {}

  updateBusOperator() {
   
    const token = this.tokenService.getToken();

    this.operatorService.updateBusOperator(this.operator, token).subscribe(
      (response) => {
        console.log('BusOperator updated:', response);
        this.router.navigate(['/operator-ui']);
       
      },
      (error) => {
        console.error('Error updating BusOperator:', error);
       
      }
    );
  }


}
