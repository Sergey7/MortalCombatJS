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
        console.log(name + 'fight...')
    },
}

const sonya =  {
    player: 2,
    name: 'Sonya',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['Wind Blade', 'Garrote Wire', 'Drone'],
    attack: function (name) {
        console.log(name + 'fight...')
    },
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

function changeHp(player) {
    console.log(player)
    const $playerLife = document.querySelector('.player' + player.player + ' .life');
    player.hp -= Math.round(Math.random() * 20) + 1;
    if (player.hp < 0) {
        player.hp = 0;
    }
    $playerLife.style.width = player.hp + '%';
}

function endFight (player1, player2) {
    if (player1.hp === 0) {
        $arenas.appendChild(playerWiner(player2.name));
        $randomButton.disabled = true
    }
}

function fight(player1, player2) {
    console.log(turnPlayer)
    if (turnPlayer === 1) {
        changeHp(player2);
        endFight(player2, player1);
        turnPlayer = 2;
    } else {
        changeHp(player1);
        endFight(player1, player2);
        turnPlayer = 1;
    }
}

$randomButton.addEventListener('click', function() {
    fight(subzero, sonya)
})