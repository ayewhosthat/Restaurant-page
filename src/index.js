import './style.css';
import Birria from './birria.jpg'

function loadPage() {
    const element = document.getElementById('content');
    const myIcon = new Image();
    const title = document.createElement('h1');
    title.textContent = 'Birria? Birria Tacoz';
    element.appendChild(title);
    myIcon.src = Birria;
    element.appendChild(myIcon); // append image to content container
    const description = document.createElement('h4');
    description.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    element.appendChild(description);
}

loadPage();