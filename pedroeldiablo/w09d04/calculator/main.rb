calculating = true
while calculating do
  puts "What sum would you like to do? Type +, -, *, /, power, root, weight-on-moon, mortgage, stamp sugar"
  answer = gets.chomp
  if answer == "sugar"
    puts "How much sugar in grams per 100ml?"
    concentration =gets.to_f
    puts "How big is your drink in ml?"
    size = gets.to_f
    if concentration > 8
      tax = (24 * size)/1000
      puts tax
    elsif concentration > 5
      tax = (18 * size)/100
      puts tax

    else puts 0
    end
  elsif answer =="mortgage"
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

  elsif answer == "stamp"
    puts "How much does your home cost?"
    value = gets.to_f
    over250 = value - 250000
    over125 = value - over250 - 125000

    duty = (over250 * 0.05) + (over125 * 0.02)
    puts duty

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
