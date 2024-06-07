# Todd Comments

## Comments

1. If you want short paths to work, I think there is something you can put in your vite.config file. There is something about it in my README on branches NAC 3 and 4 I think. You can also look in my vite.config on those branches.
2. In Home, an alternative to typing your fullYear result would be to just return the number and let the string interpolation in the footer title handle the typing automatically. Interpolation will automatically type any variable that ends up between the back ticks.
3. You've renamed your AppHeader component to Header, but you've not changed the class names inside it. You may or may not care.
4. Same problem as 3) with your Footer component.
5. When I run your app, the footer seems to be on the right hand side. I don't think anyone else does it like that.
6. Your title is 'Noughty Pups and Crxss Kitties'. I'm not sure if 'Crxss ' is deliberate? I suspect not.
7. Your Game description is still called GameBoard in your Game test file.
8. You've done your grid template better than mine.
9. In your Home tests where you test for the header, you are testing for the title as a literal string (not using the constant). Is this deliberate? It's not bad to do this, I was just wondering. You've also got 'Crxss' here again instead of 'Cross' which makes me think it's deliberate? Also, instead of checking for the actual heading, you could just check for the header getByRole('banner') (I think).
10. I'm going to pretend I didn't see you are using a getByLabelText. I'm not sure what the best solution to that would be either. Maybe getByRole('main')?

Think that's me done. Not much of any import really.

## Deliverable 2: Place First Piece

As a user, I can place my first piece on the game board so I can see player 1's move. I should be able to:

1. See that it is Player 1's turn and some indication of the token (nought or cross) that I'm using.
2. Place a piece on any of the board squares.

At this point, we do not need to change the players turn and it's fine if you can fill up the board with the player's piece.
