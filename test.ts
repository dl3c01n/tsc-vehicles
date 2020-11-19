class Vehicle {
    public colour: string;
    public brand: string;
    public model: string;
    public plate: string;

    constructor(colour: string, brand: string, model: string, plate: string){
        this.colour = colour
        this.brand = brand
        this.model = model
        this.plate = plate
    }
}

class Car extends Vehicle {
    public carburant: string;
    public className = "Voiture"

    constructor(colour: string, brand: string, model: string, plate: string, carburant: string){
        super(colour, brand, model, plate)
        this.carburant = carburant
    }

    public spec = (): void => {
        console.log(`La couleur est : ${this.colour}`);
        console.log(`La marque est : ${this.brand}`);
        console.log(`Le modèle est : ${this.model}`);
        console.log(`La plaque est : ${this.plate}`);
        console.log("Je suis une " + this.className.toLowerCase() + " qui roule avec : " + this.carburant);
    }
}

class Moto extends Vehicle {
    public cc: string;
    public className = "Moto"
    
    constructor(colour: string, brand: string, model: string, plate: string, cc: string){
        super(colour, brand, model, plate)
        this.cc = cc
    }

    public spec = (): void => {
        console.log(`La couleur est : ${this.colour}`);
        console.log(`La marque est : ${this.brand}`);
        console.log(`Le modèle est : ${this.model}`);
        console.log(`La plaque est : ${this.plate}`);
        console.log("Je suis une " + this.className.toLowerCase() + " qui roule avec : " + this.carburant);
    }
}

class Boat extends Vehicle {
    public type: string;
    public className = "Bateau"

    constructor(colour: string, brand: string, model: string, plate: string, type: string){
        super(colour, brand, model, plate)
        this.type = type
    }

    public spec = (): void => {
        console.log(`La couleur est : ${this.colour}`);
        console.log(`La marque est : ${this.brand}`);
        console.log(`Le modèle est : ${this.model}`);
        console.log(`La plaque est : ${this.plate}`);
        console.log("Je suis une " + this.className.toLowerCase() + " qui roule avec : " + this.carburant);
    }
}

const boat = new Boat('rouge', "mercdes", "Brabus", "AA-000-AA", "Diesel");
boat.spec()