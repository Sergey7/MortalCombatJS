import {createElement} from './utils.js';
 
class Player {
    constructor(props) {
        this.name = props.name;
        this.hp = props.hp;
        this.styleName = props.styleName;
        this.img = props.img;
        this.player = props.player;
        this.selector = `player${this.player}`;
        this.rootSelector = props.rootSelector;
    };

    changeHp = (demage) => {
        this.hp -= demage;
        if (this.hp < 0) {
            this.hp = 0;
        }; 
    };
    
    elHP = () => {
        return document.querySelector('.player' + this.player + ' .life');
    };
    
    renderHP = () => {
        this.elHP().style.width = this.hp + "%";
    };

    createPlayer = () => {
        const $player = createElement('div', this.selector);
        const $progressbar = createElement('div', 'progressbar');
        const $life = createElement('div', 'life');
        const $name = createElement('div', 'name');
        const $character = createElement('div', 'character');
        const $img = createElement('img');
    
        $life.style.width = this.hp + '%';    
        $name.innerText = this.name;
        $img.src = this.img;
    
        $progressbar.appendChild($life);
        $progressbar.appendChild($name);
    
        $character.appendChild($img);
    
        $player.appendChild($progressbar);
        $player.appendChild($character);
        
        const $root = document.querySelector(`${this.rootSelector}`);
        $root.appendChild($player);
        return $player;
    };
}

export default Player;