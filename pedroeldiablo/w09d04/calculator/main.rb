calculating = true
while calculating do
  puts "What sum would you like to do? Type +, -, *, /, power, root, weight-on-moon, mortgage"
  answer = gets.chomp
  if answer ="mortgage"
    puts "How much do you want to borrow?"
    borrow = gets.to_f
    puts "How long do you want to pay back over in years?"
    duration = gets.to_f
    puts "What is the interest rate?"
    rate = gets.to_f
    monthrate = (rate/12)/100
    puts monthrate
    payments = duration * 12
    puts payments
    part1 = (1 + monthrate) ** payments
    puts part1
    top = monthrate * part1
    puts top
    bottom = part1 - 1
    puts bottom
    fraction = top / bottom
    puts fraction
    monthly = borrow * fraction
    puts "£#{monthly}"

  elsif answer == "weight-on-moon"
    puts "How much do you weigh?"
    weight = gets.to_f
    puts weight*0.2
  elsif answer =="root"
      puts "Which number do you want to know the root of?"
      rootof = gets.to_f
      puts Math.sqrt(rootof)
  else
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
    end
  end
  puts "Do you want to calculate again? (y/n)"
  calculating = gets.chomp == 'y'
end
puts "OK, thanks!"
