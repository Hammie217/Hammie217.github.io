puts"Wordsearch solver"
puts"How many collumns are there?(x)"
rows=gets.chomp
puts"How many rows are there?(y)"
collumns=gets.chomp
board = Array.new(rows.to_i) { Array.new(collumns.to_i, 0) }
puts "starting from the top left"
for i in 0...rows.to_i
  for ii in 0...collumns.to_i
    puts "Enter value for co-ordinate (#{i+1},#{ii+1})"
    board[i][ii]=gets.chomp

  end

end
puts"Board:"
puts board.map{|x| x.join(" ")}
puts "Enter word to be found"
search = gets.chomp

find=search.split("")
length= find.length


for i in 0...collumns.to_i
  word=""
  for ii in 0...rows.to_i
    word = word + board[i][ii]
  end
  if word.include? search
    puts "word found horizontally on row #{i+1}"
  elsif word.include? search.reverse
    puts "word found backwards horizontally on row #{i+1}"
  end
end
for i in 0...collumns.to_i
  word=""
  for ii in 0...rows.to_i
    word = word + board[ii][i]
  end
  if word.include? search
    puts "word found downwards vertically on collumn #{i+1}"
  elsif word.include? search.reverse
    puts "word found upwards vertically on collumn #{i+1}"
  end
end
