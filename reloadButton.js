import { createElement} from './utils.js';

const createReloadButton = () => {
    const $reloadButtonDiv = createElement('div', 'reloadWrap');
    const $reloadButton = createElement('button', 'button');
    $reloadButton.innerText = 'Reload';
    $reloadButtonDiv.appendChild($reloadButton)
    $reloadButton.addEventListener('click', function() {
        window.location.reload();
    });
    return $reloadButtonDiv;
};

export default createReloadButton;