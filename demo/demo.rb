greet = ->(name) do
  if !name
    return "hello"
  end
  "hi, " + name
end

puts greet.("marron.")
