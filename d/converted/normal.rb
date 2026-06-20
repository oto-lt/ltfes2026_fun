def greet(name)
  return "hello" unless name
  "hi, #{name}"
end

res = greet("marron.")
puts res
