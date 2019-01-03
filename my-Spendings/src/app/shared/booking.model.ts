export class Booking{
    id:number;
    text: string;
    value: number;
    type:string;
    kategorie: string;

    constructor(id:number, text:string, value:number, type:string, kategorie:string){
        this.id = id;
        this.text = text;
        this.value = value;
        this.type = type;
        this.kategorie = kategorie;

    }
}