import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import './exploreitem.js';

const menu = document.querySelector('#menu');
const hero = document.querySelector('.jumbotron');
const main = document.querySelector('main');
const navlist = document.querySelector('.nav-list');

menu.addEventListener('click', (e) => {
  navlist.classList.toggle('opentoggle');
  e.stopPropagation();
});

hero.addEventListener('click', function () {
  navlist.classList.remove('opentoggle');
});

main.addEventListener('click', function () {
  navlist.classList.remove('opentoggle');
});
