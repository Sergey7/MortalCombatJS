import Game from './Game.js';

const game = new Game();

game.player1 = await game.createPlayer(1);
game.player2 = await game.createPlayer(2);

game.start();

