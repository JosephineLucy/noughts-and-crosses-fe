# Todd Comments

So, I've written you these comments, but I think you've fixed some of these on your other branch. I don't have access to your other branch, so I can't make comments on that. Maybe you should merge that other branch into main and I'll comment on that next. I'll put deliverable 2 up at the bottom of the comments too just so you have something else to work on.

## Comments

1. If you want short paths to work, I think there is something you can put in your vite.config file. There is something about it in my README on branches NAC 3 and 4 I think. You can also look in my vite.config on those branches.
2. In your Home file, your root HTML element is still a section. I think it should be `<main>`.
3. I'm not sure if your footer prop should be called 'title'. Maybe 'footerText' or 'footer' would be better? (This would also mean changing its className). Don't worry if you disagree, it's FIIIINE.
4. Your footer is still pushed over to the right-most side of the screen. You might prefer this but I think most sites have it on the left. Leave it as is if you want it like that.
5. Your helper file in GameBoard contains a BoardSpace type. Shouldn't this be in a types file?
6. In your GameBoard, you have wrapped that in `<main>`. As far as I understand it, each page (e.g. your home page) should have at most one `<header>`, one `<footer>` and one `<main>'. The main should contain all the page content, that is, `<main>`should not be wrapped by anything. In your case, it is wrapped in a`<section>` tag in the home page.
7. Consider passing your NUM_OF_BOARD_SPACES into your GameBoard as a prop so you can create larger and smaller game boards.
8. Still no date in footer.
9. Something to think about - when I use my screen reader to move through your spaces, they are all called "board space" so I have no idea which space I am on.

## Deliverable 2: Place First Piece

As a user, I can place my first piece on the game board so I can see player 1's move. I should be able to:

1. See that it is Player 1's turn and some indication of the token (nought or cross) that I'm using.
2. Place a piece on any of the board squares.

At this point, we do not need to change the players turn and it's fine if you can fill up the board with the player's piece.
