class Auth {
  #url: string;
  uuid: string = "";

  constructor(url: string) {
    this.#url = url;
  }

  #fetch(url: string | URL, data?: RequestInit) {
    return fetch(`${this.#url}/api/${url}`, data);
  }

  async signIn(username: string, password: string) {
    return new Promise((res, rej) => {
      this.#fetch("signin", {
        method: "POST",
        body: JSON.stringify({ username, password }),
      })
        .then(async (d) => {
          const uuid = await d.text();
          this.uuid = uuid;
          res(uuid);
        })
        .catch((e) => rej(e));
    });
  }

  async signUp(username: string, password: string) {
    return new Promise((res, rej) => {
      this.#fetch("signup", {
        method: "POST",
        body: JSON.stringify({ username, password }),
      })
        .then((d) => res(d))
        .catch((e) => rej(e));
    });
  }

  async logout(): Promise<number> {
    return new Promise((res, rej) => {
      this.#fetch("logout", {
        method: "POST",
      })
        .then((d) => {
          this.uuid = "";
          res(d.status);
        })
        .catch((e) => rej(e.status));
    });
  }
}

export { Auth };
