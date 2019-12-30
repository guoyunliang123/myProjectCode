/* function greeter(person) {
  return "Hello, " + person;
}

let user = "Jane User";

document.body.innerHTML = greeter(user); */


/* interface Person {
  firstName: string;
  lastName: string;
}

function date(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let username = { firstName: "Jane", lastName: "User" };

document.body.innerHTML = date(username); */

class Student {
  fullName: string;
  constructor(public firstName, public middleInitial, public lastName) {
      this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person : Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter(user);