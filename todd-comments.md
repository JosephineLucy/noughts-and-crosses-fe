# Todd Comments

Just a few comments - hardly anything. I really like what you've got at the moment. It's very neat and tidy. I've put the second deliverable at the bottom of this file - see if we can make it less neat and tidy ;

## Comments

1. If you want short paths to work, I think there is something you can put in your vite.config file. There is something about it in my README on branches NAC 3 and 4 I think. You can also look in my vite.config on those branches.
2. In your Home file, your root HTML element is still a section. I think it should be `<main>`.
3. I'm not sure if your footer prop should be called 'title'. Maybe 'footerText' or 'footer' would be better? (This would also mean changing its className). Don't worry if you disagree, it's FIIIINE.
4. Your footer is still pushed over to the right-most side of the screen. You might prefer this but I think most sites have it on the left. Leave it as is if you want it like that.
5. In your GameBoard, you have wrapped that in `<main>`. As far as I understand it, each page (e.g. your home page) should have at most one `<header>`, one `<footer>` and one `<main>'. The main should contain all the page content, that is, `<main>`should not be wrapped by anything. In your case, it is wrapped in a`<section>` tag in the home page. In short, swap that main and section tag around.
6. Fixing 5 will mean you'll have to fix your GameBoard test in the Home tests.
7. The way you're doing that GameBoard now is waaaay neater and nicer. Delightful.
8. Is there a reason you've put display flex on your header? I'm not sure you're using any flex properties on it, but I could be wrong. I have no idea what I'm doing with flex.

## Deliverable 2: Place First Piece

As a user, I can place my first piece on the game board so I can see player 1's move. I should be able to:

1. See that it is Player 1's turn and some indication of the token (nought or cross) that I'm using.
2. Place a piece on any of the board squares.

At this point, we do not need to change the players turn and it's fine if you can fill up the board with the player's piece.
