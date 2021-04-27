class Media {
    constructor (title){
        this._title = title;
        this._isChckeckOut =false;
        this._ratings=[];
    }        
get title(){
    return this._title
    }
get isChckeckOut(){
    return this._isChckeckOut;
    };
get ratings(){
    return this._ratings;
    };
set isChckeckOut(value){
    this._isChckeckOut = value;
    };
toggleCheckOutStatus(){
    this.isChckeckOut =!this.isChckeckOut;
    };
getAverageRating() {
    let sumRating= this.ratings.reduce((currentSum, ratings) => currentSum + ratings,0)
    return sumRating/this.ratings.length
    }
addRating(rating){
    this.ratings.push(rating)
    }
}

class Books extends Media {
    constructor(author,title,pages){
        super(title);
        this._author =  author
        this._pages = pages

    }
get author(){
    return this.author;
    }
get pages(){
    return this.pages;
    }
}
class Movies extends Media{
    constructor (director,title,runTime){
        super(title);
        this._director = director;
        this._runTime = runTime
    }
get director(){
    return this.director;
}
get runTime(){
    return this.runTime;
    }
}


const historyOfEverything= new Books('Bill Bryson','A Short History of Nearly Everything',544);

historyOfEverything.toggleCheckOutStatus()

historyOfEverything.addRating(3)
historyOfEverything.addRating(4)
historyOfEverything.addRating(5)

console.log(historyOfEverything.getAverageRating())

const speed = new Movies('Jan de Bont', 'Speed', 116)
speed.toggleCheckOutStatus();
console.log(speed.isChckeckOut)
speed.addRating(1);
speed.addRating(1)
speed.addRating(5)
console.log(speed.getAverageRating())

