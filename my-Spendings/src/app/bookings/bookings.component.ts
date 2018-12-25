import { Component, OnInit } from '@angular/core';
import { Booking } from '../shared/booking.model';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  bookings: Booking[];


  constructor(private bookingService: BookingService) { }

  ngOnInit() {
    this.bookings = this.bookingService.getBookings(); 
  }

  
}
