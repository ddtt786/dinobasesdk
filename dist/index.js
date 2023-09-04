import { Auth } from "./src/auth";
import { Note } from "./src/note";
class Denobase {
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
function denobase(url) {
    return new Denobase(url);
}
export { denobase };
