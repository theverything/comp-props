# comp-props

## Example

```
var compProps = require('comp-props');

var person = {
  firstName: 'John',
  lastName: 'Doe',
  birthDate: '1981-01-01'
};

compProps(person, {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
  age: function () {
    var bday = new Date(this.birthDate);
    var ageDifMs = Date.now() - bday.getTime();
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
});

console.log(person.fullName, person.age); // John Doe 33
```
