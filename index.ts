import { Auth } from "./src/auth";
import { Note } from "./src/note";

class Denobase {
  url: string;
  auth;

  constructor(url: string) {
    this.url = url;
    this.auth = new Auth(this.url);
  }

  note(name: string) {
    return new Note(this.url, name);
  }
}

function denobase(url: string) {
  return new Denobase(url);
}

export { denobase };
