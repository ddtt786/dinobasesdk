class Auth {
  #url: string;

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
        .then((d) => res(d))
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

  async logout() {
    return new Promise((res, rej) => {
      this.#fetch("logout", {
        method: "POST",
      })
        .then((d) => res(d))
        .catch((e) => rej(e));
    });
  }
}

export { Auth };
