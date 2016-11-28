def client
  puts `clear`
  puts "First name?"
  first_name = gets.to_s
  puts "Last name?"
  last_name = gets.to_s
  puts "Pets"
  pets << gets.to_s
end
