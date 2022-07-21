const jwt = require('jsonwebtoken');

const secret = 'myCat';

const payLoad = {
  sub: 1,
  role: 'customer'
}

function signToken(payload, secret){
  return jwt.sign(payLoad, secret);
}

const token = signToken(payLoad, secret);
console.log(token);
