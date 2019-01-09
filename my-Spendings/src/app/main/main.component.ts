import { Component, OnInit, Input } from '@angular/core';
import { BookingService } from '../booking.service'
import { KategorieService } from '../kategorie.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  categorieArray: string[];
  bookingResponse:string;


  constructor( private bookingservice: BookingService, private kategorieservice: KategorieService) { }

  ngOnInit() {
    this.categorieArray = this.kategorieservice.getCategorie();
  }

  onAddAusgaben(inputText, inputNumber, inputKategorie){
    this.bookingservice.onAddNew(inputText.value,inputNumber.value, 'Ausgaben', inputKategorie.value);
    this.bookingResponse = "Ausgang: " + inputText.value + " mit der Kategorie " + inputKategorie.value + " verbucht."
  };

  onAddEinnahmen(inputText, inputNumber, inputKategorie){
    this.bookingservice.onAddNew(inputText.value,inputNumber.value, 'Einnahmen', inputKategorie.value);
    this.bookingResponse = "Eingang: " + inputText.value + " mit der Kategorie " + inputKategorie.value + " verbucht."

  };
  
 

}
