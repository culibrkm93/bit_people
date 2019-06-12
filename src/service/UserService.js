import { User } from '../entities/User'

const data = () => {
    return fetch(`https://randomuser.me/api/?results=50`)
        .then(response => response.json())
        .then((userdata) => {
            const users = userdata.results.map((userObj) => new User(userObj))
            return users
        })
        .then(data => console.log(data))


}

export { data }