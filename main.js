const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');
const $formFight = document.querySelector('.control')
const $chat  = document.querySelector('.chat')

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
    attack: function () {
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
    attack: function () {
        console.log(this.name + 'fight...')
    },
    changeHp,
    elHP,
    renderHP,
}

const logs = {
    start: 'Часы показывали [time], когда [player1] и [player2] бросили вызов друг другу.',
    end: [
        'Результат удара [playerWins]: [playerLose] - труп',
        '[playerLose] погиб от удара бойца [playerWins]',
        'Результат боя: [playerLose] - жертва, [playerWins] - убийца',
    ],
    hit: [
        '[playerDefence] пытался сконцентрироваться, но [playerKick] разбежавшись раздробил копчиком левое ухо врага.',
        '[playerDefence] расстроился, как вдруг, неожиданно [playerKick] случайно раздробил грудью грудину противника.',
        '[playerDefence] зажмурился, а в это время [playerKick], прослезившись, раздробил кулаком пах оппонента.',
        '[playerDefence] чесал <вырезано цензурой>, и внезапно неустрашимый [playerKick] отчаянно размозжил грудью левый бицепс оппонента.',
        '[playerDefence] задумался, но внезапно [playerKick] случайно влепил грубый удар копчиком в пояс оппонента.',
        '[playerDefence] ковырялся в зубах, но [playerKick] проснувшись влепил тяжелый удар пальцем в кадык врага.',
        '[playerDefence] вспомнил что-то важное, но внезапно [playerKick] зевнув, размозжил открытой ладонью челюсть противника.',
        '[playerDefence] осмотрелся, и в это время [playerKick] мимоходом раздробил стопой аппендикс соперника.',
        '[playerDefence] кашлянул, но внезапно [playerKick] показав палец, размозжил пальцем грудь соперника.',
        '[playerDefence] пытался что-то сказать, а жестокий [playerKick] проснувшись размозжил копчиком левую ногу противника.',
        '[playerDefence] забылся, как внезапно безумный [playerKick] со скуки, влепил удар коленом в левый бок соперника.',
        '[playerDefence] поперхнулся, а за это [playerKick] мимоходом раздробил коленом висок врага.',
        '[playerDefence] расстроился, а в это время наглый [playerKick] пошатнувшись размозжил копчиком губы оппонента.',
        '[playerDefence] осмотрелся, но внезапно [playerKick] робко размозжил коленом левый глаз противника.',
        '[playerDefence] осмотрелся, а [playerKick] вломил дробящий удар плечом, пробив блок, куда обычно не бьют оппонента.',
        '[playerDefence] ковырялся в зубах, как вдруг, неожиданно [playerKick] отчаянно размозжил плечом мышцы пресса оппонента.',
        '[playerDefence] пришел в себя, и в это время [playerKick] провел разбивающий удар кистью руки, пробив блок, в голень противника.',
        '[playerDefence] пошатнулся, а в это время [playerKick] хихикая влепил грубый удар открытой ладонью по бедрам врага.',
    ],
    defence: [
        '[playerKick] потерял момент и храбрый [playerDefence] отпрыгнул от удара открытой ладонью в ключицу.',
        '[playerKick] не контролировал ситуацию, и потому [playerDefence] поставил блок на удар пяткой в правую грудь.',
        '[playerKick] потерял момент и [playerDefence] поставил блок на удар коленом по селезенке.',
        '[playerKick] поскользнулся и задумчивый [playerDefence] поставил блок на тычок головой в бровь.',
        '[playerKick] старался провести удар, но непобедимый [playerDefence] ушел в сторону от удара копчиком прямо в пятку.',
        '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.',
        '[playerKick] не думал о бое, потому расстроенный [playerDefence] отпрыгнул от удара кулаком куда обычно не бьют.',
        '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.'
    ],
    draw: 'Ничья - это тоже победа!'
};

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
    if (player1.hp === 0 && player2.hp === 0 ) {
        $chat.insertAdjacentHTML('afterbegin', generateLogs(player1, player2, 'draw'))
        playerWiner();
    } else if (player2.hp === 0) {
        $chat.insertAdjacentHTML('afterbegin', generateLogs(player1, player2, 'end'));
        playerWiner(player1.name);
    } else if (player1.hp === 0){
        $chat.insertAdjacentHTML('afterbegin', generateLogs(player2, player1, 'end'));
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

function attack () {
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

function generateLogs (playerKick, playerDef, event, hp) {
    let message;
    const time = getTime();
    
    switch (event) {
        case 'hit':
            message = logs.hit[getRandom(logs.hit.length) - 1].replace('[playerDefence]', playerDef.name).replace('[playerKick]', playerKick.name);
            return `<p class='hit'>[${time}] ${message} Потерял ${hp} hp. Осталось hp - [${playerDef.hp} /100]</p>`;
        case 'defence':
            message = logs.defence[getRandom(logs.defence.length) - 1].replace('[playerKick]', playerKick.name).replace('[playerDefence]', playerDef.name);
            return `<p class='def'>[${time}] ${message}</p>`;
        case 'end':
            message = logs.end[getRandom(logs.end.length) - 1].replace('[playerWins]', playerKick.name).replace('[playerLose]', playerDef.name);
            return `<p class='start'>[${time}] ${message}</p>`;
        case 'draw':
            return `<p class='start'>[${time}] ${logs.draw[0]}</p>`;

    }
}

function getTime () {
    const date = new Date();
    return date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
}


function calсHit (player1, playerAttack, player2, playerDef) {
    if (playerAttack.hit !== playerDef.defence) {
        player2.changeHp(playerAttack.value);
        player2.renderHP();
        $chat.insertAdjacentHTML('afterbegin', generateLogs(player1, player2, 'hit', playerAttack.value));
    }   else {
        $chat.insertAdjacentHTML('afterbegin', generateLogs(player1, player2, 'defence'));
    }
}


$formFight.addEventListener('submit', function(e) {
    e.preventDefault();
    const enemy = enemyAttack();
    const myAttack = attack();
    calсHit(subzero, myAttack, sonya, enemy);
    calсHit(sonya, enemy, subzero, myAttack);
    endFight(subzero, sonya);
})



const time = getTime();
const $startGame = `<p class='start'>${logs.start.replace('time', time).replace(['[player1]'], subzero.name).replace(['[player2]'], sonya.name)}</p>`;
$chat.insertAdjacentHTML('afterbegin', $startGame)