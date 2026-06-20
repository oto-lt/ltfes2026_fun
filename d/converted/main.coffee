end = null



{ puts } = require "fxxkinmethod/ruby"

greet = (name) ->
  return "hello" unless name
  "hi, #{name}"
end

res = greet "marron."
puts res
