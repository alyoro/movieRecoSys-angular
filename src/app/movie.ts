export class Movie{
    id: number;
    title: string;
    director: string;
    type: string;
    year: string;
    avgScore: number;
    yourScore: number;

    constructor(title: string, director: string, year: string, type: string){
        this.title = title;
        this.director = director;
        this.year = year;
        this.type = type;
    }
}