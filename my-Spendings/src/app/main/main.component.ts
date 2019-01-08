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


  constructor( private bookingservice: BookingService, private kategorieservice: KategorieService) { }

  ngOnInit() {
    this.categorieArray = this.kategorieservice.getCategorie();
  }

  onAddAusgaben(inputText, inputNumber, inputKategorie){
    this.bookingservice.onAddNew(inputText.value,inputNumber.value, 'Ausgaben', inputKategorie.value);
  };

  onAddEinnahmen(inputText, inputNumber, inputKategorie){
    this.bookingservice.onAddNew(inputText.value,inputNumber.value, 'Einnahmen', inputKategorie.value);
  };
  
 

}
