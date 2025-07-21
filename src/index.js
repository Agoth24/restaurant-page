// Entry Point for project, writes to /dist/main.js
import './global.css'
import loadPage from "./loadpage";
import homePageContent  from "./homePage";
import menuPageContent from './menuPage';

loadPage(homePageContent(), 'home')