import { Auth } from "./src/auth";
import { Note } from "./src/note";
class Dinobase {
    url;
    auth;
    constructor(url) {
        this.url = url;
        this.auth = new Auth(this.url);
    }
    note(name) {
        return new Note(this.url, name);
    }
}
function dinobase(url) {
    return new Dinobase(url);
}
export { dinobase };
