// Entry Point for project, writes to /dist/main.js
import './global.css'
import './menu.css'
import './home.css'
import loadPage from "./loadpage";
import homePage  from "./homePage";
import menuPage from './menuPage';

const contentSection = document.querySelector('#content')
loadPage(contentSection, menuPage)