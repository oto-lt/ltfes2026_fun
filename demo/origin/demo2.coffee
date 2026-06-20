{ puts } = require "fxxkinmethod/ruby"

greet = (name) ->
  if !name
    return "hello"
  "hi, " + name

puts greet("marron.")
