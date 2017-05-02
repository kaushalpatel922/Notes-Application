console.log('starting app');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

console.log(_.isString(true));
console.log(_.isString('Kaushal'));

// var res = notes.add(1,2);
// console.log('Result:',res);

// var user = os.userInfo();
//
// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`, function(err) {
//   if(err) {
//     console.log('unable to write the file');
//   }
// });
