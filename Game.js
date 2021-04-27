import generateLogs from './logs.js';
import { roundFight } from './fight.js';
import Player from './Player.js';
import Server from './Server.js';
const server = new Server();
const $formFight = document.querySelector('.control');

class Game {  
    createPlayer = async (n) => {
        const playerBody = await server.getRandomPlayer();
        const player = new Player ({
            ...playerBody,
            player: n,
            styleName: `p${n}`, 
            rootSelector: '.arenas',
        });
        return player;
    }

    start = () => {
        generateLogs(this.player1, this.player2, 'start');
        this.player1.createPlayer();
        this.player2.createPlayer();
        this.addFormListener();
        
    };

    formHandler = (event) => {
        event.preventDefault();
        roundFight(this.player1, this.player2);
    };

    addFormListener = () => {
        $formFight.addEventListener('submit', this.formHandler);
    };
};

export default Game;