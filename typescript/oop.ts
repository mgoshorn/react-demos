class Cat implements Pettable {
    name: string;
    birthdate: Date;

    constructor(name: string, birthdate: Date) {
        this.name = name;
        this.birthdate = birthdate;
    }

    sayHello() {
        console.log('Meow');
    }
    
    pet() {
        console.log('Hello');
    }
}

interface Pettable {
    pet(): void;
}