class User {
  constructor(firstName, lastName, age, location) {
    this.name = firstName;
    this.surname = lastName;
    this.age = age;
    this.address = location;
  }

  isSameAge(ageCheck) {
    if (ageCheck.age === this.age) {
      return this.name + " ha la stessa età di " + ageCheck.name;
    } else if (this.age > ageCheck.age) {
      return this.name + " è più vecchio di " + ageCheck.name;
    } else if (this.age < ageCheck.age) {
      return this.name + " è più giovane di " + ageCheck.name;
    } else {
      return "Errore: operazione non consentita";
    }
  }
}
const firstUser = new User("Gigi", "Bagigi", 20, "Via dei Matti 0");
const secondUser = new User("Aldo", "Baglio", 53, "Via Brazorf 40");
const thirdUser = new User("Guido", "Guidi", 25, "Via Guidonia 16");
const errorUser = new User("Errore", "Fatale", "errore", "errore2");

console.log(firstUser.isSameAge(thirdUser));
console.log(secondUser.isSameAge(thirdUser));
console.log(thirdUser.isSameAge(firstUser));
console.log(errorUser.isSameAge(firstUser));
