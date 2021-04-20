import { getRandom, createElement} from './utils.js';
import generateLogs from './logs.js';
import createReloadButton from './reloadButton.js'

const $formFight = document.querySelector('.control');
const $randomButton = document.querySelector('.button');
const $arenas = document.querySelector('.arenas');

const HIT = {
    head: 30,
    body: 25,
    foot: 20,
};

const ATTACK = ['head', 'body', 'foot'];


const myAttack = () => {
    const attack = {};
    for (let item of $formFight){
        if (item.checked && item.name === 'hit') {
            attack.value = getRandom(HIT[item.value]);
            attack.hit = item.value;
        }
        if (item.checked && item.name === 'defence') {
            attack.defence = item.value;
        }
        item.checked = false;
    }
    return attack;
}

const enemyAttack = () => {
    const hit = ATTACK[getRandom(3) - 1];
    const defence = ATTACK[getRandom(3) - 1];
    return {
        value: getRandom(HIT[hit]),
        hit,
        defence
    };
};

const calcHit = (playerHit, motionPlayerHit, playerDef, motionPlayerDef) => {
    if (motionPlayerHit.hit !== motionPlayerDef.defence) {
        playerDef.changeHp(motionPlayerHit.value);
        playerDef.renderHP();
        generateLogs(playerHit, playerDef, 'hit', motionPlayerHit.value);
    }   else {
        generateLogs(playerHit, playerDef, 'defence');
    };
};

const endFight = (player1, player2) => {
    if (player1.hp === 0 && player2.hp === 0 ) {
        generateLogs(player1, player2, 'draw');
        playerWiner();
    } else if (player2.hp === 0) {
        generateLogs(player1, player2, 'end');
        playerWiner(player1.name);
    } else if (player1.hp === 0){
        generateLogs(player2, player1, 'end');
        playerWiner(player2.name);
    };
};

const playerWiner = (name) => {
    const $winerTitel = createElement('div', 'winerTitle');
    if (name) {
        $winerTitel.innerText = name + ' wins';
    } else {
        $winerTitel.innerText = 'Drow';
    };
    $arenas.appendChild($winerTitel);
    $randomButton.disabled = true;
    $arenas.appendChild(createReloadButton());
};

export const roundFight = (player1, player2) => {
    const motionPlayer1 = myAttack();
    const motionPlayer2 = enemyAttack();
    calcHit(player1, motionPlayer1, player2, motionPlayer2);
    calcHit(player2, motionPlayer2, player1, motionPlayer1);
    endFight(player1, player2);
}