import { Component, OnInit, Input } from '@angular/core';
import { BookingService } from '../booking.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  
  constructor( private bookingservice:BookingService) { }

  ngOnInit() {
  }

  onAddAusgaben(inputText, inputNumber){
    this.bookingservice.onAddNew(inputText.value,inputNumber.value, 'Ausgaben');
  };

  onAddEinnahmen(inputText, inputNumber){
    this.bookingservice.onAddNew(inputText.value,inputNumber.value, 'Einnahmen');
  };
    

}
