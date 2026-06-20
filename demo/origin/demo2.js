const { puts } = require("fxxkinmethod/ruby");

function greet(name) {
  if (!name) {
    return "hello";
  }
  return "hi, " + name;
}

puts(greet("marron."));
