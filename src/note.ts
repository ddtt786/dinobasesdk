interface SearchOptions {
  value?: string;
  min?: number | string;
  max?: number | string;
  cursor?: string;
  limit?: number;
}

type Data = { [key: string]: string | boolean | number | undefined };

class Note {
  #url: string;
  #note: string;

  constructor(url: string, name: string) {
    this.#url = url;
    this.#note = name;
  }

  #fetch(url: string | URL, data?: RequestInit) {
    return fetch(`${this.#url}/api/${url}`, data);
  }

  async getOne(uuid: string): Promise<Data> {
    return new Promise((res, rej) => {
      this.#fetch(`sheet/${this.#note}/${uuid}`)
        .then(async (d) => res(await d.json()))
        .catch((e) => rej(e));
    });
  }

  async search(
    column: string,
    options: SearchOptions
  ): Promise<{ data: string[]; cursor?: string }> {
    const url = new URL(`${this.#url}/api/search/${this.#note}/${column}`);
    if (options.value) url.searchParams.append("value", options.value);
    if (options.min) url.searchParams.append("min", String(options.min));
    if (options.max) url.searchParams.append("max", String(options.max));
    if (options.limit) url.searchParams.append("limit", String(options.limit));
    if (options.cursor) url.searchParams.append("cursor", options.cursor);

    return new Promise((res, rej) => {
      fetch(url)
        .then(async (d) => res(await d.json()))
        .catch((e) => rej(e));
    });
  }

  async insert(data: Data): Promise<string> {
    return new Promise((res, rej) => {
      this.#fetch(`note/${this.#note}`, {
        method: "POST",
        body: JSON.stringify(data),
      })
        .then(async (d) => res(await d.text()))
        .catch((e) => rej(e));
    });
  }

  async update(uuid: string, data: Data) {
    return new Promise((res, rej) => {
      this.#fetch(`sheet/${this.#note}/${uuid}`, {
        method: "PATCH",
        body: JSON.stringify(data),
      })
        .then((d) => res(d))
        .catch((e) => rej(e));
    });
  }

  async delete(uuid: string) {
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
