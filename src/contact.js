export function Contact() {
    const content = document.querySelector('#content')

    const contactAddress = document.createElement("p")
    contactAddress.textContent = '1550 E 13th St Brooklyn, NY'

    const contactPhoneNumber = document.createElement('p')
    contactPhoneNumber.textContent = '1-646-377-1700'

    const contactName = document.createElement('p') 
    contactName.textContent = 'Jeffery Rosario'

    const contactDetails = [contactAddress, contactPhoneNumber, contactName]

    contactDetails.forEach(contactDetail => {
        content.appendChild(contactDetail)
    });
}