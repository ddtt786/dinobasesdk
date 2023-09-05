import { Auth } from "./src/auth";
import { Note } from "./src/note";
import { FileStorage } from "./src/storage";
declare class Dinobase {
    url: string;
    auth: Auth;
    storage: FileStorage;
    constructor(url: string);
    note(name: string): Note;
}
declare function dinobase(url: string): Dinobase;
export { dinobase };
