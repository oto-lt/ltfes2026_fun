greet = (name) ->
  return "hello" unless name
  "hi, #{name}"

res = greet "marron."
console.log res
