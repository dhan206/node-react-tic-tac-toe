# React-Tac-Toe

This module is a Tic-Tac-Toe game played in the browser, completed as part of a [course](http://arch-joelross.rhcloud.com/) at the UW ISchool. 

The below questions should be answered (in detail!) regarding your submission!


##### 1. Does using a Model-View-Controller architecture make it easier to change your game in the future? How many places would you need to make changes to your code to make this a 5x5 game of Tic-Tac-Toe?
Yes, using a Model-View-Controller architecture would make it easier to change my game in the future. To make my game into a 5x5 game of Tic-Tac-Toe I would need to change two places in my code; the Gameboard component in the view to display a 5x5 board and the winOrTie logic in the TicTacToeGame class to determine if the gameboard houses a winning combination.


##### 2. Why did I say that an `Array` is the best data structure to represent the game's grid of cells? Why not a 2D-array (Array of Arrays), or an Object, or a Linked-List, or a Tree? 
I found it challenging to use a 1-Dimension Array for the data structure. I attempted to include two for loops, one nested inside of another, to create the gameboard view (3x3) inside of the react Gameboard view component, but I kept getting errors. It wouldn't let me use for inside of the render function. I believe that a 2D-array would have solved this problem because I could've mapped the outter array and then the array inside to create the grid shape without needing to hard code the structure of the layout. This would've allowed for an easier transition into a 5x5 gameboard.


##### 3. What online resources did you find to help you learn React? How do you search for resources, and how did you determine whether they were helpful or not? Think back to the "learning an API" paper! 
I used google, stackoverflow, React documenttion and the lecture slides. In some cases, I found thing that worked but turned it to be work arounds of what I should have been doing. I fixed this by fixing bugs in my code and doing some restructuring to make it work.


##### 4. Approximately how many hours did it take you to complete this assignment? #####
25+ hours.


##### 5. Did you receive help from any other sources (classmates, etc)? If so, please list who (be specific!). #####
Yes, Joel helped me through Slack.


##### 6. Did you encounter any problems in this assignment we should warn students about in the future? How can we make the assignment better? #####
A few typos and grammar errors that made it hard to understand in some places.
