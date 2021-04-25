import generateLogs from './logs.js';
import { createPlayer, changeHp, elHP, renderHP } from './players.js';
import { roundFight } from './fight.js';


const $arenas = document.querySelector('.arenas');
const $formFight = document.querySelector('.control');


const subzero =  {
    player: 1,
    name: 'Sub-Zero',
    styleName: 'p1', 
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['Ice Scepter', 'Kori Blade', 'Ice Hammer'],
    attack: function () {
        console.log(this.name + 'fight...')
    },
    changeHp,
    elHP,
    renderHP,
};

const sonya =  {
    player: 2,
    name: 'Sonya',
    styleName: 'p2', 
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['Wind Blade', 'Garrote Wire', 'Drone'],
    attack: function () {
        console.log(this.name + 'fight...')
    },
    changeHp,
    elHP,
    renderHP,
};

$arenas.appendChild(createPlayer(subzero));
$arenas.appendChild(createPlayer(sonya));


generateLogs(subzero, sonya, 'start');

$formFight.addEventListener('submit', function(e) {
    e.preventDefault();
    roundFight(subzero, sonya);
})


