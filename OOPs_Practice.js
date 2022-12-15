// Inheritance using super(arg1, arg2, ... argN)

/* class Car {
    constructor(wheels, engine,Mirror) {
        this.noOfWheels = wheels
        this.engine = engine
        this.Mirror = Mirror
    }
    printWheels() {
        console.log("Car class", this.noOfWheels);
    }


    printEngine() {
        console.log("Car class", this.engine);
    }
}


class Honda extends Car {
    constructor(W, E, M) {
        super(W, E, M)
    }
}


let C1 = new Honda(5, "honda", "2")

C1.printWheels();
C1.printEngine()
console.log('C1:', C1) */


// 2. Polymorphism

/* class Car {
    constructor(wheels, engine) {
        this.noOfWheels = wheels
        this.engine = engine
    }

    printWheels() {
        console.log("Car class", this.noOfWheels);
    }
    printEngine() {
        console.log("Car class", this.engine);
    }
    printMirror() {
        console.log("Car class", this.Mirror);
    }
}

class Honda extends Car {
    constructor(W, E, seat,M) {
        super(W, E)
        this.Mirror = M
    }

    printWheels() {
        console.log("Honda class", this.noOfWheels);
    }
    printEngine() {
        console.log("Honda class", this.engine);
    }
}


let C1 = new Honda(5, "honda", 7, 2)

C1.printWheels();
C1.printEngine()
C1.printMirror()
console.log('C1:', C1) */


// 3. Data Encapsulation
// Binding / Wrapping your data and methods together

/* class Car {
    constructor(wheels, engine) {
        this.noOfWheels = wheels // Property 1
        this.engine = engine // Property 2
    }

    printWheels() { // Method 1
        console.log("Car class", this.noOfWheels);
    }
    printEngine() { // Method 2
        console.log("Car class", this.engine);
    }
    printMirror() { // Method 3
        console.log("Car class", this.Mirror);
    }
}

class Honda extends Car {
    constructor(W, E, seat, M) {
        super(W, E)
        this.Mirror = M // Property 1
    }

    printWheels() { // Method 1
        console.log("Honda class", this.noOfWheels);
    }
    printEngine() { // Method 2
        console.log("Honda class", this.engine);
    }
}


let C1 = new Honda(5, "honda", 7, 2)

C1.printWheels();
C1.printEngine()
C1.printMirror()
console.log('C1:', C1) */

// 4. Abstraction

class Car {
    #Wheel;
    #Engine;
    constructor(wheel, engine) {
        this.#Wheel = wheel
        this.#Engine = engine
        // if (this.constructor == Car) {
        //     throw new Error("Cannot create Object of Abstract Class");
        // }
    }
    // display() {
    //     throw new Error("Abstract class method needs to be completed");
    // };
    display() {
        console.log(this.#Wheel)
        console.log(this.#Engine)
    }
    // #display() {
    //     return this.#Wheel;
    // }
}


class Honda extends Car {
    constructor(W, E) {
        super(W, E);
    }
    #display() {
        return this.#Wheel;
    }
    printWheel() {
        let wheel = this.#display();
        if (wheel > 1) {
            console.log("More than 1 wheel")
        }
    }

}

let C1 = new Honda(4, -10);
C1.display();
C1.printWheel();
console.log(C1);
