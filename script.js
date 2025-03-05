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
    }
}

