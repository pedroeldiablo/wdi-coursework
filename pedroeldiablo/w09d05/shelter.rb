class Shelter
  attr_reader :name
  attr_accessor :flights

  def initialize(name)
    @name = name
    @animals = []
  end

  def add_animal(animal)
    @animals << animal
  end
end



# def shelter
#   puts `clear`
#   puts "Name of Shelter?"
#   shelter_name = gets.to_s
#   puts "Animals at shelter"
#   animals_at_shelter << gets.to_s
#   puts "Animals at shelter"
#   capacity = gets.to_i
# end
