const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');
const $formFight = document.querySelector('.control')

const HIT = {
    head: 30,
    body: 25,
    foot: 20,
}

const ATTACK = ['head', 'body', 'foot']

const subzero =  {
    player: 1,
    name: 'Sub-Zero',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['Ice Scepter', 'Kori Blade', 'Ice Hammer'],
    attack: function (name) {
        console.log(this.name + 'fight...')
    },
    changeHp,
    elHP,
    renderHP,
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
    changeHp,
    elHP,
    renderHP,
}

function createElement(tag, className) {
    const $tag = document.createElement(tag);
    if (className) {
        $tag.classList.add(className);
    }
    return $tag;
}
function getRandom (num) {
    return Math.ceil(Math.random() * num);
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
    if (name) {
        $winerTitel.innerText = name + ' wins';
        return $winerTitel;
    } else {
        $winerTitel.innerText = 'Drow';
        return $winerTitel;
    } 
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

function createReloadButton() {
    const $reloadButtonDiv = createElement('div', 'reloadWrap');
    const $reloadButton = createElement('button', 'button');
    $reloadButton.innerText = 'Reload';
    $reloadButtonDiv.appendChild($reloadButton)
    $reloadButton.addEventListener('click', function() {
        window.location.reload();
    })
    return $reloadButtonDiv;
}

function playerWiner(name) {
    const $winerTitel = createElement('div', 'winerTitle');
    if (name) {
        $winerTitel.innerText = name + ' wins';
    } else {
        $winerTitel.innerText = 'Drow';
    } 
    $arenas.appendChild($winerTitel);
    $randomButton.disabled = true;
    $arenas.appendChild(createReloadButton());
}

function endFight (player1, player2) {
    if (player1.hp == 0 && player2.hp === 0 ) {
        playerWiner();
    } else if (player2.hp == 0) {
        playerWiner(player1.name);
    } else if (player1.hp == 0){
        playerWiner(player2.name);
    }
}

function enemyAttack() {
    const hit = ATTACK[getRandom(3) - 1];
    const defence = ATTACK[getRandom(3) - 1];
    return {
        value: getRandom(HIT[hit]),
        hit,
        defence
    }
}

function Attack () {
    const attack = {}
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

function calсHit (myAttack, enemyAttack){
    if (myAttack.hit !== enemyAttack.defence) {
        sonya.changeHp(myAttack.value);
        sonya.renderHP();
    }
    if (enemyAttack.hit !== myAttack.defence) {
        subzero.changeHp(enemyAttack.value);
        subzero.renderHP();
    }
}


$formFight.addEventListener('submit', function(e) {
    e.preventDefault();
    const enemy = enemyAttack();
    const myAttack = Attack();
    calсHit(myAttack, enemy);
    endFight(subzero, sonya);
})