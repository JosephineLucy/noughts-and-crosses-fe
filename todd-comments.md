# Todd Comments

1. In the lint-staged of your package.json, you could add npm test and npm type-check to make sure you can only commit when tests are running and the types are fine.
2. Give it a title in your index.html
3. You have sass as a dependency; I think it should be a dev dependency. You may want to check this though. Be sure to npm uninstall it before reinstalling.
4. In your package.json dev dependencies, you have an "i" dependency - don't think you want that. Be sure to uninstall it rather than just delete it.
5. You also have "npm" as a dev dependency - pretty sure you don't want that either. Uninstall, don't just delete.
6. [optional] in App, you don't need Home to be in a fragment tag (unless you add new pages at some point, in which case you'd probably be doing something with a router? I can't remember. Anyway, I'd deal with that nonsense if/when it comes up.)
7. In your header and footer, I would create them as components with props for the title. That way you can reuse them in other applications.
8. Another thing I'd do is create a GameLabels enum with the property gameTitle and put my title string in there. I'd pass that to my header and footer so wherever we then have the title, we only need to change it in one place.
9. There is a semantic tag for footers (footer), so you don't need to be creating it as a div.
10. In footer, I believe it is conventional to put the copyright sign before the title rather than after. Also, we should probably have the year in there too.
11. BOARD_SIZE might be a better name than NUM_OF_SPACES? My reasoning is that it feels a little clearer to me what we are talking about. If you just saw the const NUMBER_OF_SPACES out in the wild with no context, it could be anything. BOARD_SIZE better says what it is. Happy for you to disagree with that though.
12. I don't think your html tags header, footer and main need aria labels. They are naturally given labels as part of their tag so screen readers read them correctly anyway. It's best to use aria labels for elements that display no visible text or require a bit of instruction on how to use them.
13. if you do use aria labels in your header, footer etc, don't separate the words with dashes. They should be straight forward english sentences: "game board", not "game-board". Screen readers read aria labels.
14. You have a type in your GameBoard helper.tsx file. Should probably be in types.ts.
15. Your button aria label has a hyphen in it too.
16. if you want to get main in your tests, you don't need to use the name property. You could just getByRole("main") as there should only ever be 1 main element in your project. The same is true of the header and footer tags (though the role of the footer tag is something daft like 'content-info'.)
17. In your footer test, you are not using getByRole. If you change your footer so it uses the footer tag instead of div (as suggested above) you can use getByRole('content-info') to get it (you might have to check I have 'content-info' right)
18. Suggestion - you could give some thought to passing your board size/number of spaces to the GameBoard component as a prop. It would make it more reusable and gives you the potential to create grids of any size.
19. Something to think about - when I use my screen reader to move through your spaces, they are all called "board space" so I have no idea which space I am on.

I think that is all from me at this point. It's looking nice and tidy in general even though I've made lots of comments.
