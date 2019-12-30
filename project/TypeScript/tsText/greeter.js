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
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Jane", "M.", "User");
document.body.innerHTML = greeter(user);
