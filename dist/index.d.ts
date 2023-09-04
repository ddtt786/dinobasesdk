import { Auth } from "./src/auth";
import { Note } from "./src/note";
declare class Denobase {
    url: string;
    auth: Auth;
    constructor(url: string);
    note(name: string): Note;
}
declare function denobase(url: string): Denobase;
export { denobase };
