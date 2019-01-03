import { Component, OnInit, Input } from '@angular/core';
import { BookingService } from '../booking.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  
  kategorie: string [] = [
    "Lebensmittel",
    "Reinigungsmaterial"

  ]

  constructor( private bookingservice:BookingService) { }

  ngOnInit() {
  }

  onAddAusgaben(inputText, inputNumber, inputKategorie){
    this.bookingservice.onAddNew(inputText.value,inputNumber.value, 'Ausgaben', inputKategorie.value);
  };

  onAddEinnahmen(inputText, inputNumber, inputKategorie){
    this.bookingservice.onAddNew(inputText.value,inputNumber.value, 'Einnahmen', inputKategorie.value);
  };
    

}
