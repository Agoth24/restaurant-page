// Entry Point for project, writes to /dist/main.js
import './global.css'
import loadPage from "./loadpage";
import createHomePage  from "./homePage";
import createMenuPage from './menuPage';

loadPage(createHomePage())