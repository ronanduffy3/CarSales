export interface ICar{
    id: string;
    make: string;
    model: string;
    year: number;
    imageURL: string;
}

export class Car implements ICar{
    id: string;
    make: string;
    model: string;
    year: number;
    imageURL: string;

    constructor(make:string,model:string,year:number,imageURL:string){
        this.make = make;
        this.model = model;
        this.year = year;
        this.imageURL = imageURL;
    }
}