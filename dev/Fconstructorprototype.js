function User(firstname, lastname, age) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.age = age
}

User.prototype.emaildomain = '@gmail.com';

User.prototype.fullemailaddress = function () {
  return this.firstname + this.lastname + this.emaildomain;
}

var user1 = new User('john', 'morris', 22);
console.log(user1);
user1.emaildomain;
user1.fullemailaddress();

