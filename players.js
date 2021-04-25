import {createElement} from './utils.js';
 
export const createPlayer = (player) =>  {
    const $player = createElement('div', 'player' + player.player);
    const $progressbar = createElement('div', 'progressbar');
    const $life = createElement('div', 'life');
    const $name = createElement('div', 'name');
    const $character = createElement('div', 'character');
    const $img = createElement('img');

    $life.style.width = player.hp + '%';    
    $name.innerText = player.name;
    $img.src = player.img;

    $progressbar.appendChild($life);
    $progressbar.appendChild($name);

    $character.appendChild($img);

    $player.appendChild($progressbar);
    $player.appendChild($character);

    return $player;
};

export function changeHp (minusHP) {
    this.hp -= minusHP;
    if (this.hp < 0) {
        this.hp = 0;
    }; 
};

export function elHP() {
    return document.querySelector('.player' + this.player + ' .life');
};

export function renderHP() {
    this.elHP().style.width = this.hp + "%";
};