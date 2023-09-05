import { Auth } from "./src/auth";
import { Note } from "./src/note";
import { FileStorage } from "./src/storage";

class Dinobase {
  url: string;
  auth;
  storage;

  constructor(url: string) {
    this.url = url;
    this.auth = new Auth(this.url);
    this.storage = new FileStorage(this.url);
  }

  note(name: string) {
    return new Note(this.url, name);
  }
}

function dinobase(url: string) {
  return new Dinobase(url);
}

export { dinobase };
