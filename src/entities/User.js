class User {
    constructor(userObj) {

        this.name = userObj.name;
        this.email = userObj.email;
        this.dob = new Date(userObj.dob.date);
        this.photo = userObj.picture;
        this.gender = userObj.gender;

    }
    formatFirstName() {
        const firstLetterOfFirstName = this.name.first.slice(0, 1).toUpperCase();
        const restOfFirstName = this.name.first.slice(1, this.name.first.length);
        const firstName = firstLetterOfFirstName + "" + restOfFirstName;
        return firstName
    }
    formatLastName() {
        const firstLetterOfLastName = this.name.last.slice(0, 1).toUpperCase();
        const restOfLastName = this.name.last.slice(1, this.name.last.length);
        const lastName = firstLetterOfLastName + "" + restOfLastName;
        return lastName
    }

    isFemale() {
        return this.gender === 'female'
    }

    hideEmail() {
        let firstPart = this.email.slice(0, 3)
        let lastPart = this.email.slice(-15);
        let hiddenEmail = firstPart + "..." + lastPart;
        return hiddenEmail
    }

    formatDate() {

        const day = this.dob.getDate();
        const month = this.dob.getMonth() + 1;
        const year = this.dob.getFullYear();
        if (day < 10 && month < 10) {
            return (`0${day}.0${month}.${year}`)
        } else if (month < 10 && day > 10) {
            return (`${day}.0${month}.${year}`)
        } else if (month > 10 && day < 10) {
            return (`0${day}.${month}.${year}`)
        } else if (month === 10 && day < 10) {
            return (`0${day}.${month}.${year}`)
        } else if (month < 10 && day === 10) {
            return (`${day}.0${month}.${year}`)
        }
        else {
            return (`${day}.${month}.${year}`)
        }
    }

}


export {
    User
}