import { Auth } from "./src/auth";
import { Note } from "./src/note";
import { FileStorage } from "./src/storage";
class Dinobase {
    url;
    auth;
    storage;
    constructor(url) {
        this.url = url;
        this.auth = new Auth(this.url);
        this.storage = new FileStorage(this.url);
    }
    note(name) {
        return new Note(this.url, name);
    }
}
function dinobase(url) {
    return new Dinobase(url);
}
export { dinobase };
