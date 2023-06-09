import './style.css';
import UI from './modules/UI';

const fontAwesome = document.createElement('script');
fontAwesome.src = "https://kit.fontawesome.com/ab87087bfd.js";
fontAwesome.crossorigin = "anonymous";
document.head.appendChild(fontAwesome);

document.addEventListener("DOMContentLoaded", UI.loadHome);