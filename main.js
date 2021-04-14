const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');
let turnPlayer = Math.round(Math.random()) + 1;

const subzero =  {
    player: 1,
    name: 'Sub-Zero',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['Ice Scepter', 'Kori Blade', 'Ice Hammer'],
    attack: function (name) {
        console.log(this.name + 'fight...')
    },
    changeHp: changeHp,
    elHP:  elHP,
    renderHP: renderHP,
}

const sonya =  {
    player: 2,
    name: 'Sonya',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['Wind Blade', 'Garrote Wire', 'Drone'],
    attack: function (name) {
        console.log(this.name + 'fight...')
    },
    changeHp: changeHp,
    elHP:  elHP,
    renderHP: renderHP,
}

function createElement(tag, className) {
    const $tag = document.createElement(tag);
    if (className) {
        $tag.classList.add(className);
    }
    return $tag;
}

function createPlayer(player)  {
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
}     

$arenas.appendChild(createPlayer(subzero));
$arenas.appendChild(createPlayer(sonya));

function playerWiner(name) {
    const $winerTitel = createElement ('div', 'winerTitle');
    $winerTitel.innerText = name + ' wins';
    return $winerTitel;
}

function changeHp (minusHP) {
    this.hp -= minusHP;
    if (this.hp < 0) {
        this.hp = 0;
    }; 
}

function elHP() {
    return document.querySelector('.player' + this.player + ' .life');
}

function renderHP() {
    this.elHP().style.width = this.hp + "%";
}

function endFight (player1, player2) {
    if (player1.hp === 0) {
        $arenas.appendChild(playerWiner(player2.name));
        $randomButton.innerText = 'Play again?';
        $randomButton.removeEventListener('click', function() {})
        $randomButton.addEventListener('click', function() {
            location.reload();
        })
    }
}

function fight(player1, player2) {
    if (turnPlayer === 1) {
        player2.changeHp(Math.round(Math.random() * 20) + 1);
        player2.renderHP();
        endFight(player2, player1);
        turnPlayer = 2;
    } else {
        player1.changeHp(Math.round(Math.random() * 20) + 1);
        player1.renderHP();
        endFight(player1, player2);
        turnPlayer = 1;
    }
}

$randomButton.addEventListener('click', function() {
    fight(subzero, sonya)
})