import itemsTemplate from '../templates/menu-items.hbs';
import menu from '../menu.json';
const menuRef = document.querySelector('.js-menu');
const markup = itemsTemplate(menu);
menuRef.insertAdjacentHTML('beforeend', markup);
