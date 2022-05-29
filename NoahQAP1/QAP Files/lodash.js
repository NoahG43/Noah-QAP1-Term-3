// this program uses lodash to generate a random number and uses an if statement to
// display a pass or fail result once the program runs

const _ = require("lodash");

const num = _.random(0, 100);
if (num <= 49) {
  console.log(num + " fail");
} else {
  console.log(num + " pass");
}
