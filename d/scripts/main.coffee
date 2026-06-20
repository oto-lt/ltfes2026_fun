{ puts } = require "fxxkinmethod/ruby"

greet = (name) ->
  return "hello" unless name
  "hi, #{name}"

res = greet "marron."
puts res
