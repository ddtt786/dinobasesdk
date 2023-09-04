import { Auth } from "./src/auth";
import { Note } from "./src/note";

class Dinobase {
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

function dinobase(url: string) {
  return new Dinobase(url);
}

export { dinobase };
