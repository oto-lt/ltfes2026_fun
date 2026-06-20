greet = ->(name) do
  return "hello" unless name
  "hi, #{name}"
end

res = greet.("marron.")
puts res
