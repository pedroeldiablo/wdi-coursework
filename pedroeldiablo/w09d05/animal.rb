class Animal
  attr_reader :breed, :gender
  attr_accessor :animal_name, :toys

  def initialize(breed, animal_name, gender)
    @breed = breed
    @gender = gender
    @animal_name = animal_name
    @animal_toys = []
  end
  def to_s
    "#{@gender} #{@breed} called #{@animal_name} who likes #{@animal_toys}"
  end
  def add_animal(animal)
    @animals << animal
  end
end






# def animal
#   puts `clear`
#   puts "Animal name?"
#   animal_name = gets.to_s
#   puts "Breed?"
#   breed = gets.to_s
#   puts "Gender"
#   gender= gets.to_s
#   puts "What are their favourite toys?"
#   toys = gets.chomp
# end
