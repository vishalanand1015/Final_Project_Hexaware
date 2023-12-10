import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from 'src/app/Model/booking.model';
import { Bus } from 'src/app/Model/bus.model';
import { BookingService } from 'src/app/Service/booking/booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
 export class BookingComponent {
  busDetails: Bus | undefined;
  booking: Booking = new Booking();
  
  constructor(private bookingService: BookingService, private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const busId = +params['busId'];

      this.bookingService.getBusById(busId).subscribe((data: Bus) => {
        this.busDetails = data; 
        console.log(this.busDetails);
      });
    });
  }



}
