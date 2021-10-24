/* tictactoe.js
 * Author: Wes Modes <wmodes@csumb.edu>
 * Created: 19 September
 * License: Public Domain
 */

// Create 3x3 grid w 9 spaces
// Determine who gets X and who gets O (X goes to person who lost last game)
// X goes first
// Take turns in placing X or O, until someone wins
// Make sure valid move only in empty square
// Win condition - 3 X/O in a row (including diagonal)


// Set up the game initially [TicTacToe]
//     Create a game board [Board]
//     Create a couple players [Player]
// Start the game loop [TicTacToe]
//     Render the board [Board]
//     Ask for and validate the current
//       player's coordinates [Player]
//     If the game should end [TicTacToe]
//         Display the proper victory / draw
//           message
//         Stop looping
//     Else
//         Switch to the next player and
//           keep looping [TicTacToe]
