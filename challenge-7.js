class Person {
    constructor(name, age){
        this.name = name;
        this.age = age
    }

    compareAge(otherPerson){
        if (this.age === otherPerson.age){
            return `${otherPerson.name} is the same age as me.`
        } else if (this.age > otherPerson.age){
            return `${otherPerson.name} is younger than me.`
        } else if (this.age < otherPerson.age){
            return `${otherPerson.name} is older than me.`
        }
    }
}

p1 = new Person("Samuel", 24);
p2 = new Person("Joel", 36);
p3 = new Person("Lily", 24);

console.log(p1.compareAge(p2));
console.log(p2.compareAge(p1));
console.log(p1.compareAge(p3));