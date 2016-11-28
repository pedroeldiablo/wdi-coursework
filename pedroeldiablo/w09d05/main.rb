require_relative "client"
require_relative "animal"
require_relative "shelter"

@shelter = Shelter.new "Battersea Dogs Home"

def menu
  puts `clear`
  puts "*** 🎅 🎄 ✈️  Welcome to #{@shelter.name} ✈️ 🎄 🎅  ***\n\n"
  puts "1: Add an animal"
  puts "2: Donate an animal to a client"
  puts "3: Add a client"
  puts "4: List all the animals"
  puts "Q: Quit \n\n"
  print "--> "
  gets.chomp
end

def list_animals(animals)
    @shelter.animals.each_with_index do |animal, index|
    puts "#{index}.\t#{animal}"
    end
end

response = menu
until response.upcase == "Q" do
  case response
  when "1" # donate an animal
    puts "Would you like to donate an animal?"
    donate_yes = gets.to_s
    puts "What the animal's name?"
    name = gets.chomp
    puts "What breed are they?"
    breed = gets.chomp
    puts "What gender are they?"
    gender = gets.chomp
    puts "What are their favourite toys?"
    toys = gets.chomp
  when "2" # list animals
    list_animals @shelter
    gets
  when "3" #register a client to the shelter
    puts "First name?"
    first_name = gets.to_s
    puts "Last name?"
    last_name = gets.to_s
    puts "Pets"
    client_pets << gets.to_s
  end

  # gets
  response = menu
end
puts "Your response was: #{response}"
