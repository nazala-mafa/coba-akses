class Animal {
  constructor(name='', age=0, isMammal=true) {
    this.name = name;
    this.age = age;
    this.isMammal = isMammal;
  }
}

class Rabbit extends Animal {
  constructor(name='', age=0, isMammal=true) {
    super(name, age, isMammal)
  }
  eat(params) {
    return `${this.name} sedang makan!`;
  }
}

class Eagle extends Animal {
  constructor(name='', age=0, isMammal=false) {
    super(name, age, isMammal)
  }
  fly() {
    return `${this.name} sedang terbang!`;
  }
}

const myRabbit = new Rabbit('Labi', 2)
const myEagle = new Eagle('Elo', 4)

console.log(myRabbit);
console.log(myEagle);