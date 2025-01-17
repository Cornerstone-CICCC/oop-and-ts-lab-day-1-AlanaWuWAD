class Animal {
    static remainingAnimals = 0
    #name;
    #species;
    #energy;

    constructor(name, species, energy){
        this.#name = name
        this.#species = species
        this.#energy = energy
        this.atk = 10
        this.add = 10
        Animal.remainingAnimals++
    }

    get name(){
        return this.#name
    }
    get species(){
        return this.#species
    }
    get energy(){
        return this.#energy
    }
    set energy(defaultEnergy){
        return this.#energy = defaultEnergy
    }

    introduce(){
        return `${this.getName, this.getSepcies, this.getEnergy}`
    }

    attack(target){
        console.log(`${this.name} swoops ${target.name}`)

        target.energy -= this.atk
        this.energy -= this.atk

        console.log(`${this.name}'s energy is ${this.energy}`)
        console.log(`${target.name}'s energy left ${target.energy}`)

        if(target.energy <= 0){
            console.log(`${this.#name} won; ${target.name}  lost `)
            Animal.remainingAnimals -= 1
            console.log(`Number of animals still have energy : ${Animal.remainingAnimals}`)
        }
    }

    eat(){
        console.log(`${this.#name} eats and gains energy!`)

        this.#energy += this.add

        console.log(`${this.#name} energey add ${this.add}, ${this.#name}'s energy: ${this.#energy}`)
    }

}

class Bird extends Animal {
    constructor(name, species, canFly){
        const birdEnergy = 100
        super(name, species, birdEnergy)
        this.canFly = canFly
        this.atk = 20
    }
}

class Mammal extends Animal {
    constructor(name, species, furColor){
        const mammalEnergy = 200
        super(name, species, mammalEnergy)
        this.furColor = furColor
        this.atk = 50
        this.add = 20
    }
}

class Reptile extends Animal {
    constructor(name, species, coldBlooded){
        const reptileEnergy = 100
        super(name, species, reptileEnergy)
        this.coldBlooded = coldBlooded
        this.atk = 30
        this.add = 15
    }
}


// DRIVER CODE: Create instances of the subclasses and use their properties and methods. You can modify this to add more attacks and eating actions.

const eagle = new Bird("Eagle", "Bird of Prey", true);
console.log(`Name: ${eagle.name}, Species: ${eagle.species}, Can Fly: ${eagle.canFly}`);

const lion = new Mammal("Lion", "Big Cat", "Golden");
console.log(`Name: ${lion.name}, Species: ${lion.species}, Fur Color: ${lion.furColor}`);

const snake = new Reptile("Snake", "Serpent", true);
console.log(`Name: ${snake.name}, Species: ${snake.species}, Cold-Blooded: ${snake.coldBlooded}`);

// Example attackz
console.log("\n--- Attacks ---");
eagle.attack(lion);
snake.attack(lion);
lion.attack(snake);
lion.attack(snake);

// Display the remaining number of animals with energy
console.log(`Remaining animals with energy: ${Animal.remainingAnimals}`);

// Example eating
console.log("\n--- Eating ---");
eagle.eat();
lion.eat();
snake.eat();
