import Game from './Game.js';
import Player from './Player.js';


const subzero = new Player ({
    player: 1,
    name: 'Sub-Zero',
    styleName: 'p1', 
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    rootSelector: '.arenas',
});

const sonya =  new Player ({
    player: 2,
    name: 'Sonya',
    styleName: 'p2', 
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    rootSelector: '.arenas',
});

const game = new Game({
    player1: subzero, 
    player2: sonya,
});



game.start();



