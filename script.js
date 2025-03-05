const contactCard = {
    firstName : "Nick",
    lastName : "Masters",
    phoneNumber : "(904)123-4567",
    email : "example@example.com",
    address : {
        street : "123 Avandale st",
        city : "imaginary",
        state : "Florida",
        zipCode : "12345"
    },

    //method to grab the full name
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    //method to grab the address
    getAddress() {
        return `${this.address.street}
        ${this.address.city}, ${this.address.state} ${this.address.zipCode}`;
    },

    //method to grab contact information
    getContactInformation() {
        return `${this.phoneNumber}
                ${this.email}`;
    },

    //have the information appear on the screen
    document.getElementById('')
}

