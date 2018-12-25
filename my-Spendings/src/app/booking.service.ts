import { Booking } from './shared/booking.model'

export class BookingService{

    bookings: Booking[] = [];

      counter:number = 1;

    onAddNew(text: string, value: number, type: string){
        this.bookings.push(new Booking(this.counter, text, value, type));
        this.counter++;
    }

    getBookings(){
        return this.bookings.slice();
    }
}