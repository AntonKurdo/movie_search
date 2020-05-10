import './styles.css'
import Keyboard from 'simple-keyboard';
import '../node_modules/simple-keyboard/build/css/index.css';
import filter from './components/languageFilter'

const btnSearch = document.querySelector('.btn-search');
const searchField = document.querySelector('input');
const btnClean = document.querySelector('.clean_inp');
const btnKeyboard = document.querySelector('.keyboard');
const keyboardItem = document.querySelector('.simple-keyboard')
let isOpened = false;

let myKeyboard = new Keyboard({
     onChange: function (input) {
          document.querySelector(".search-input").value = input;
     }
});

searchField.addEventListener('keydown', (e) => {
     if (e.keyCode === 13) {
          filter(encodeURI(searchField.value));
     }
})

searchField.addEventListener('input', () => {
     const notificationCont = document.querySelector('.notif')
     if(notificationCont) {
     notificationCont.classList.add('opacityClass')
     setTimeout(() => {
          notificationCont.remove();
     }, 1200)
}
})


btnSearch.addEventListener('click', () => {
     filter(encodeURI(searchField.value));
})

btnClean.addEventListener('click', () => {
     searchField.value = '';
})

btnKeyboard.addEventListener('click', () => {
     if (!isOpened) {
          keyboardItem.style.display = 'block';
          isOpened = true;
     } else {
          keyboardItem.style.display = 'none';
          isOpened = false;
     }
})

filter();

