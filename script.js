import contactCard from './contact.js'

//display information on the screen by targeting the nodes then using the objects methods to display the information
document.getElementById('contactName').textContent = contactCard.getFullName();
document.getElementById('contactInfo').textContent = contactCard.getContactInformation();
document.getElementById('contactAddress').textContent = contactCard.getAddress();

