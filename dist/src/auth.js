class Auth {
    #url;
    constructor(url) {
        this.#url = url;
    }
    #fetch(url, data) {
        return fetch(`${this.#url}/api/${url}`, data);
    }
    async signIn(username, password) {
        return (await this.#fetch("signin", {
            method: "POST",
            body: JSON.stringify({ username, password }),
        })).status;
    }
    async signUp(username, password) {
        return (await this.#fetch("signup", {
            method: "POST",
            body: JSON.stringify({ username, password }),
        })).status;
    }
    async logout() {
        await this.#fetch("logout", {
            method: "POST",
        });
    }
}
export { Auth };
