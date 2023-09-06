class Auth {
    #url;
    uuid = "";
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
                .then(async (d) => {
                const uuid = await d.text();
                this.uuid = uuid;
                res(uuid);
            })
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
                .then((d) => {
                this.uuid = "";
                res(d.status);
            })
                .catch((e) => rej(e.status));
        });
    }
}
export { Auth };
