class FileStorage {
    #url;
    constructor(url) {
        this.#url = url;
    }
    #fetch(url, data) {
        return fetch(`${this.#url}/api/${url}`, data);
    }
    async upload(data) {
        const formData = new FormData();
        formData.append("file", data);
        return new Promise((res, rej) => {
            this.#fetch("storage/upload", {
                method: "POST",
                body: formData,
            })
                .then(async (d) => res(await d.text()))
                .catch(async (e) => rej(e));
        });
    }
    async remove(uuid) {
        return new Promise((res, rej) => {
            this.#fetch(`storage/${uuid}`, {
                method: "DELETE",
            })
                .then(async (d) => res(d))
                .catch(async (e) => rej(e));
        });
    }
}
export { FileStorage };
