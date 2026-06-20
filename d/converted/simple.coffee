end = null



greet = (name) ->
  return "hello" unless name
  "hi, #{name}"
end

res = greet "marron."
console.log res
