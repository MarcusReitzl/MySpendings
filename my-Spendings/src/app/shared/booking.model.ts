export class Booking{
    id:number;
    text: string;
    value: number;
    type:string;

    constructor(id:number, text:string, value:number, type:string){
        this.id = id;
        this.text = text;
        this.value = value;
        this.type = type;
    }
}