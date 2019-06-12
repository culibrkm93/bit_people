

class User {
    constructor(userObj) {

        this.name = userObj.name.first;
        this.email = userObj.email;
        this.dob = userObj.dob.date;
        this.photo = userObj.picture.large;
    }

}
export {
    User
}