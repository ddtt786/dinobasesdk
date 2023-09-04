"use strict";
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
        return await (await this.#fetch(`sheet/${this.#note}/${uuid}`)).json();
    }
    async search(column, options) {
        const url = new URL(`${this.#url}search/${column}`);
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
        return await (await fetch(url)).json();
    }
    async insert(note, data) {
        return await (await this.#fetch(`createsheet/${note}`, {
            method: "POST",
            body: JSON.stringify(data),
        })).status;
    }
    async update(uuid, data) {
        return (await this.#fetch(`sheet/${this.#note}/${uuid}`, {
            method: "PATCH",
            body: JSON.stringify(data),
        })).status;
    }
    async delete(uuid) {
        return (await this.#fetch(`sheet/${this.#note}/${uuid}`, {
            method: "DELETE",
        })).status;
    }
}
