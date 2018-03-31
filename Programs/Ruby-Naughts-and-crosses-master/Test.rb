def drawBoard(board)
  puts"#{board[7]}|#{board[8]}|#{board[9]}"
  puts"-----"
  puts"#{board[4]}|#{board[5]}|#{board[6]}"
  puts"-----"
  puts"#{board[1]}|#{board[2]}|#{board[3]}"
end

def checkWin(board)

  i=1
  while i<=7
  if board[i]==board[i+1]&&board[i+1]==board[i+2]&&board[i]!=" " #for i=1,4,7
    return board[i]
  end
    i+=3
  end
  i=1
  while i<3
  if board[i]==board[i+3] &&board[i+3]==board[i+6] &&board[i]!=" "# for i=1,2,3
    return board[i]
  end
    i +=1
    end
    if (board[3]==board[5]&& board[5]==board[7]&&board[3]!=" ") || (board[1]==board[5] &&board[5]==board[9]&&board[1]!=" ")
      return board[i]
  end
  return "none"
end


board=[" "," "," "," "," "," "," "," "," "," "]
turn=false
won = false
puts "Naughts and crosses"
while won ==false
drawBoard(board)
  if turn == false
    puts"Naughts enter a numpad co-ordinate"
    turn = true
  else
    puts"Crosses enter a numpad co-ordinate"
    turn = false
  end
  position = gets.chomp
system('cls')
  if board[position.to_i]==" "
  if turn == true
    board[position.to_i] = "o"
  else
    board[position.to_i] = "x"
  end
  else
    puts "already taken silly, try again"
    turn = !turn
  end

x=checkWin(board)
if x != "none"
  if x == "o"
    puts"Naughts wins!"
    won=true
  else
    puts"Crosses wins!"
    won=true
  end

end

end


