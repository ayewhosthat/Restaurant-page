import './style.css';
import Birria from './birria.jpg';
import Phone from './phone.svg';
import Email from './email-edit-outline.svg';
const element = document.getElementById('content');

// function to load the page
function loadPage() {
    const myIcon = new Image();
    const title = document.createElement('h1');
    title.textContent = 'Birria? Birria Tacoz';
    element.appendChild(title);
    myIcon.src = Birria;
    element.appendChild(myIcon); // append image to content container
    const attention = document.createElement('h2');
    attention.textContent = 'Why choose us?';
    element.appendChild(attention);
    const description = document.createElement('h3');
    description.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    element.appendChild(description);
}

loadPage();

const home = document.querySelector('.home');
home.addEventListener('click', () => {
    clearPage();
    loadPage();
});

function clearPage() {
    element.innerHTML = '';
}

const contact = document.querySelector('.contact');
contact.addEventListener('click', () => {
    clearPage();
    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact-div');
    const text = document.createElement('h1');
    text.textContent = 'Contact us!';
    contactDiv.appendChild(text);
    const phoneDiv = document.createElement('div');
    phoneDiv.classList.add('contact-method');
    const phone = document.createElement('h2');
    phone.textContent = 'Phone: (123)-456-TACO';
    const phoneIcon = new Image();
    phoneIcon.src = Phone;
    phoneDiv.appendChild(phoneIcon);
    phoneDiv.appendChild(phone);
    contactDiv.appendChild(phoneDiv);
    const emailDiv = document.createElement('div');
    emailDiv.classList.add('contact-method');
    const email = document.createElement('h2');
    email.textContent = 'management@birriabirriatacoz.com';
    const emailIcon = new Image();
    emailIcon.src = Email;
    emailDiv.appendChild(emailIcon);
    emailDiv.appendChild(email)
    contactDiv.appendChild(emailDiv);
    element.appendChild(contactDiv);
});