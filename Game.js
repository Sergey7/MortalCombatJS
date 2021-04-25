import generateLogs from './logs.js';
import { roundFight } from './fight.js';
const $formFight = document.querySelector('.control');

class Game {
    constructor (props){
        this.player1 = props.player1;
        this.player2 = props.player2;
    };

    start = () => {
        generateLogs(this.player1, this.player2, 'start');
        this.player1.createPlayer();
        this.player2.createPlayer();
        this.addFormListener()
        
    };

    formHandler = (event) => {
        event.preventDefault();
        roundFight(this.player1, this.player2);
    }

    addFormListener = () => {
        $formFight.addEventListener('submit', this.formHandler);
    }
};

export default Game;