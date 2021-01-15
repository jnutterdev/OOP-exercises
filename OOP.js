class Person {
    constructor(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    greet(otherPerson) {
      console.log('Hello ' + otherPerson.name + ', I am ' + this.name + '!');
    }
  }

let sonny = new Person("Sonny", "sonny@hotmail.com", "483-485-4948");
console.log(sonny);

let jordan = new Person("Jordan", "jordan@aol.com", "495-586-3456");
console.log(jordan);

sonny.greet(jordan);
jordan.greet(sonny);

console.log(`Hey, Jordan. Feel free to reach out to ${sonny.name} at ${sonny.email} or ${sonny.phone}`);
console.log(`Hey, Sonny. Feel free to reach out to ${jordan.name} at ${jordan.email} or ${jordan.phone}`);