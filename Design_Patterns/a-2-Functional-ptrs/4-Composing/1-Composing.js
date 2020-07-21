/**
 * Composing / 1
 */

 //Data
 const users = require('./data.users');

 //functions
 const head = items => items[0]

 const setUser = user => ({
     fullName:`${user.firstName} ${user.lastName}`,
     age:user.age
 });

const setResponse = user => `${user.fullName} is ${user.age} year(s) old`

const getFirstChild = data => setResponse(setUser(head(data.filter(user => user.age < 20))))

console.log(getFirstChild(users));

