import './style.css'
import { getData, getPlanets } from './src/main';

document.addEventListener("DOMContentLoaded", () => {
  getData();  
  getPlanets();  
});
