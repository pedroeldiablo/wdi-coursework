class PigLatin
  def self.translate string
    string_array = string.split(" ")
    string_array.map! do |word|
      if word.match(/qu/i)
        start_index = word.index('qu') + 1
        const = word[0..start_index]
        word[0..start_index] = ""
        "#{word}#{const}ay"
      else
        start_index = word.index(word.match(/a|e|i|o|u/i).to_s) - 1
        const = word[0..start_index]
        word[0..start_index] = ""
        "#{word}#{const}ay"
      end
    end
    string_array.join(' ')
  end
end
