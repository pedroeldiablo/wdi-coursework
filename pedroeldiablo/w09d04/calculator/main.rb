calculating = true
while calculating do
  puts "What sum would you like to do? Type +, -, *, /, power, root"
  answer = gets.chomp
  puts "What is your first number?"

  num1 = gets.to_f
  puts "What is your second number?"
  num2 = gets.to_f

  case answer
  when "+"
    puts "addition"
    puts num1 + num2

  when "-"
    puts "subtraction"
    puts num1 - num2
  when "*"
    puts "multiplication"
    puts num1 * num2
  when "/"
    puts "division"
    puts num1 / num2
  when "power"
    puts "#{num1} to the power #{num2}"
    puts num1 ** num2
  when "root"
    puts "root of #{num1}"
    puts Math.sqrt(num1)
  end
  puts "Do you want to calculate again? (y/n)"
  calculating = gets.chomp == 'y'
end

puts "OK, thanks for playing!"