class Vehicle {
    protected numberOfWheels: number;
    private numberOfDoors: number;
    private color: string;
    private type: string;
    
    constructor(numberOfWheels: number, numberOfDoors: number, color: string, type: string) {
        this.numberOfWheels = numberOfWheels;
        this.numberOfDoors = numberOfDoors;
        this.color = color;
        this.type = type;
    }
    
    public getNumberOfWheels(): number {
        return this.numberOfWheels;
    }
    
    public getNumberOfDoors(): number {
        return this.numberOfDoors;
    }
    
    public getColor(): string {
        return this.color;
    }
    
    public getType(): string {
        return this.type;
    }
    
    public setColor(color: string): void {
        this.color = color;
    }
    
    public setType(type: string): void {
        this.type = type;
    }
    
    public setNumberOfDoors(numberOfDoors: number): void {
        this.numberOfDoors = numberOfDoors;
    }
    
    public setNumberOfWheels(numberOfWheels: number): void {
        this.numberOfWheels = numberOfWheels;
    }
}
    
class Car extends Vehicle {
    private trunkSize: number;
    
    constructor(numberOfWheels: number, numberOfDoors: number, color: string, type: string) {
        super(numberOfWheels, numberOfDoors, color, type);
        this.trunkSize = 0;
    }
    
    public getTrunkSize(): number {
        return this.trunkSize;
    }
    
    public setTrunkSize(trunkSize: number): void {
        this.trunkSize = trunkSize;
    }
    
    toString(): string {
        return `number of wheels protected class example: ${this.numberOfWheels}`;
    }
}
    
class VW extends Car {
    private model: string;
    
    constructor(numberOfWheels: number, numberOfDoors: number, color: string, type: string, model: string) {
        super(numberOfWheels, numberOfDoors, color, type);
        this.model = model;
    }
    
    public getModel(): string {
        return this.model;
    }
    
    public setModel(model: string): void {
        this.model = model;
    }
    
    toString(): string {
        return `VW Model: ${this.model}, Wheels: ${this.getNumberOfWheels()}, Doors: ${this.getNumberOfDoors()}, Color: ${this.getColor()}, Trunk Size: ${this.getTrunkSize()} cubic feet`;
    }
    }
    
    let vehicle = new Vehicle(4, 4, 'Red', 'Sedan');
    let car = new Car(4, 4, 'Blue', 'SUV');
    let vw = new VW(4, 4, 'Black', 'Hatchback', 'Golf');
    
    // console.log(car.toString());
    // console.log(vw.toString());
    // console.log('vehicle type ', vehicle.constructor.name);
    // console.log('car type ', car.constructor.name);
    // console.log('vw type ', vw.constructor.name);
    
    // // returns the type of the class
    // console.log('vehicle type ', Object.getPrototypeOf(vehicle));
    // console.log('car type ', Object.getPrototypeOf(car));
    // console.log('vw type ', Object.getPrototypeOf(vw));
    
    let vehicle1 = new Vehicle(4, 4, 'Red', 'Sedan');
    let vehicle2 = new Vehicle(4, 4, 'Blue', 'SUV');
    let vehicle3 = new Vehicle(4, 4, 'Green', 'Hatchback');
    
    let car1 = new Car(4, 4, 'Blue', 'SUV');
    let car2 = new Car(4, 4, 'Blue', 'Hatchback');
    let car3 = new Car(4, 4, 'Red', 'Sedan');
    
    let vw1 = new VW(4, 4, 'Black', 'Hatchback', 'Golf');
    let vw2 = new VW(4, 4, 'White', 'Sedan', 'Passat');
    let vw3 = new VW(4, 4, 'Silver', 'SUV', 'Tiguan');
    
    let vehicles = [vehicle1, vehicle2, vehicle3];
    let cars = [car1, car2, car3];
    let vws = [vw1, vw2, vw3];
    
    const requresVehicles = (vehicles: Vehicle[]): void => {
        vehicles.forEach(vehicle => {
        console.log(vehicle.toString());
    });
}
    
    requresVehicles(vehicles);
    requresVehicles(vws);
    requresVehicles(cars);