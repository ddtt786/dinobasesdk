class Auth {
    #url;
    constructor(url) {
        this.#url = url;
    }
    #fetch(url, data) {
        return fetch(`${this.#url}/api/${url}`, data);
    }
    async signIn(username, password) {
        return new Promise((res, rej) => {
            this.#fetch("signin", {
                method: "POST",
                body: JSON.stringify({ username, password }),
            })
                .then((d) => res(d))
                .catch((e) => rej(e));
        });
    }
    async signUp(username, password) {
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
