const subzero =  {
    name: "Sub-Zero",
    hp: 50,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['Ice Scepter', 'Kori Blade', 'Ice Hammer'],
    attack: function () {
        console.log("Sub-Zero" + 'fight...')
    },
}

const sonya =  {
    name: "Sonya",
    hp: 80,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['Wind Blade', 'Garrote Wire', 'Drone'],
    attack: function () {
        console.log("Sonya" + 'fight...')
    },
}

function createPlayer(numberPlayer, player)  {
    const $player = document.createElement('div');
    $player.classList.add(numberPlayer);

    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');

    const $life = document.createElement('div');
    $life.classList.add('life');
    $life.style.width = player['hp'] + "%";

    const $name = document.createElement('div');
    $name.classList.add('name');
    $name.innerText = player['name'];

    $progressbar.appendChild($life);
    $progressbar.appendChild($name);


    const $character = document.createElement('div');
    $character.classList.add('character');

    const $img = document.createElement('img');
    $img.src = player['img'];

    $character.appendChild($img);

    $player.appendChild($progressbar);
    $player.appendChild($character);

    return $player;
}     

const $player1 = createPlayer('player1', subzero);
const $player2 = createPlayer('player2', sonya);

const $arenas = document.querySelector('.arenas');

$arenas.appendChild($player1);
$arenas.appendChild($player2);