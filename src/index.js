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

function createMenuItem(item, price, description) {
    const menuItem = document.createElement('div');
    const left = document.createElement('div');
    left.classList.add('item-left');
    const right = document.createElement('div');
    right.classList.add('itemright');
    menuItem.classList.add('menu-item');
    const itemName = document.createElement('p');
    itemName.classList.add('item-name');
    itemName.textContent = item;
    const itemPrice = document.createElement('p');
    itemPrice.classList.add('item-price');
    itemPrice.textContent = price;
    const itemDescription = document.createElement('p');
    itemDescription.classList.add('item-description');
    itemDescription.textContent = description;
    left.appendChild(itemName);
    left.appendChild(itemDescription);
    right.appendChild(itemPrice);
    menuItem.appendChild(left);
    menuItem.appendChild(right);
    return menuItem;
}

const menu = document.querySelector('.menu');
menu.addEventListener('click', () => {
    clearPage();
    const menu = document.createElement('div');
    const heading = document.createElement('h1');
    heading.textContent = 'Menu';
    const birriaTacosDescription = `Our signature rich and cheesy birria tacos, served with a pot of dipping consomme and plenty of 
    freshly made pico de gallo for added freshness and zing`
    const birriaTacos = createMenuItem('Birria Tacos', '\$18', birriaTacosDescription);
    const loadedFriesDescription = `Crispy, freshly made in-house fries topped with our signature slow cooked birria beef, 
    sour cream, onions, cilantro, and tomatoes`;
    const loadedFries = createMenuItem('Loaded Fries', '\$12', loadedFriesDescription);
    const quesadillasDescription = `Cheesy, toasty tortillas filled with your choice of flame-grilled chicken or 
    slow-cooked beef`;
    const quesadillas = createMenuItem('Quesadillas', '\$16', quesadillasDescription);
    const churrosDescription = `Fluffy, doughy churros dusted with cinammon sugar, and paired with a sweet yet bitter 
    chocolate sauce`;
    const churros = createMenuItem('Churros', '\$4', churrosDescription);
    const burritoDescription = `10\" burrito, customized to your heart\'s content with our selection of meat, vegetables, 
    and mouthwatering sauces`;
    const burrito = createMenuItem('Burrito', '\$9', burritoDescription);
    const drinkDescription = `Our sweet lemon green tea is the perfect balance of refreshment and satisfaction`;
    const drink = createMenuItem('Sweet Lemon Green Tea', '\$5', drinkDescription);
    
    const arrItems = [heading, birriaTacos, loadedFries, quesadillas, churros, burrito, drink];
    for (const item of arrItems) {
        menu.appendChild(item);
    }
    element.appendChild(menu);
});