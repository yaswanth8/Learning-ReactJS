import axios from "axios";

export class UserService {
    static serverUrl = "https://jsonplaceholder.typicode.com";

    static getAllUsers() {
        let dataUrl = `${UserService.serverUrl}/users`
        return axios.get(dataUrl);
    }

}