import { User } from '../entities/User'
import axios from 'axios';

const data = () => {
    return axios.get(`https://randomuser.me/api/?results=500`)
        .then(response => response.data.results) // ovde moze da se uradi (response => console.log(response))
        .then((userdata) => userdata.map((userObj) => {
            return new User(userObj)
        })
        )

}

// console.log(data());

export { data }