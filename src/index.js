import { Contact } from './contact.js';
import {Homepage} from './header.js'
import { Menu } from './menu.js';
import "./styles.css"

function deleteDivContents(){
    const homepage = document.querySelector('#content')
    if(homepage){
        homepage.innerHTML = ''
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const navContent = document.getElementById('nav')
    const buttonContainer = document.createElement('div')
    buttonContainer.id = "buttonContainer"
    navContent.appendChild(buttonContainer)

    const buttonLabels = ['Home', 'Menu', 'Contact']

    buttonLabels.forEach(label => {
        const button = document.createElement('button')
        button.id = label
        button.className = 'buttons'
        button.textContent = label
        buttonContainer.append(button)
    })
    Homepage();

    // event listner for the other pages
    const menuBtn = document.querySelector('#Menu')
    const homeBtn = document.querySelector('#Home')
    const contactBtn = document.querySelector('#Contact')

    // load them

    if(homeBtn) {
        homeBtn.addEventListener('click', () => {
            deleteDivContents()
            Homepage()
        })
    }

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            deleteDivContents()
            Menu()
        })
    }

    if (contactBtn) {
        contactBtn.addEventListener('click', () => {
            deleteDivContents()
            Contact()
        })
    }
})
