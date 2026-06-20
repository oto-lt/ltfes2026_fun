greet = (name) ->
  if !name
    return "hello"
  "hi, " + name

console.log greet("marron.")
