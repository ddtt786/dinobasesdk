class Auth {
  #url: string;

  constructor(url: string) {
    this.#url = url;
  }

  #fetch(url: string | URL, data?: RequestInit) {
    return fetch(`${this.#url}/api/${url}`, data);
  }

  async signIn(username: string, password: string): Promise<number> {
    return (
      await this.#fetch("signin", {
        method: "POST",
        body: JSON.stringify({ username, password }),
      })
    ).status;
  }

  async signUp(username: string, password: string): Promise<number> {
    return (
      await this.#fetch("signup", {
        method: "POST",
        body: JSON.stringify({ username, password }),
      })
    ).status;
  }

  async logout() {
    await this.#fetch("logout", {
      method: "POST",
    });
  }
}
