import { Auth } from "./src/auth";
import { Note } from "./src/note";
declare class Dinobase {
    url: string;
    auth: Auth;
    constructor(url: string);
    note(name: string): Note;
}
declare function dinobase(url: string): Dinobase;
export { dinobase };
