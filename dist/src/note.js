class Note {
    #url;
    #note;
    constructor(url, name) {
        this.#url = url;
        this.#note = name;
    }
    #fetch(url, data) {
        return fetch(`${this.#url}/api/${url}`, data);
    }
    async getOne(uuid) {
        return new Promise((res, rej) => {
            this.#fetch(`sheet/${this.#note}/${uuid}`)
                .then(async (d) => res(await d.json()))
                .catch((e) => rej(e));
        });
    }
    async search(column, options) {
        const url = new URL(`${this.#url}/api/search/${column}`);
        if (options.value)
            url.searchParams.append("value", options.value);
        if (options.min)
            url.searchParams.append("min", String(options.min));
        if (options.max)
            url.searchParams.append("max", String(options.max));
        if (options.limit)
            url.searchParams.append("limit", String(options.limit));
        if (options.cursor)
            url.searchParams.append("cursor", options.cursor);
        return new Promise((res, rej) => {
            fetch(url)
                .then(async (d) => res(await d.json()))
                .catch((e) => rej(e));
        });
    }
    async insert(data) {
        return new Promise((res, rej) => {
            this.#fetch(`createsheet/${this.#note}`, {
                method: "POST",
                body: JSON.stringify(data),
            })
                .then(async (d) => res(await d.text()))
                .catch((e) => rej(e));
        });
    }
    async update(uuid, data) {
        return new Promise((res, rej) => {
            this.#fetch(`sheet/${this.#note}/${uuid}`, {
                method: "PATCH",
                body: JSON.stringify(data),
            })
                .then((d) => res(d))
                .catch((e) => rej(e));
        });
    }
    async delete(uuid) {
        return new Promise((res, rej) => {
            this.#fetch(`sheet/${this.#note}/${uuid}`, {
                method: "DELETE",
            })
                .then((d) => res(d))
                .catch((e) => rej(e));
        });
    }
    async list() {
        return new Promise((res, rej) => {
            this.#fetch(`notelist`)
                .then((d) => res(d))
                .catch((e) => rej(e));
        });
    }
}
export { Note };
