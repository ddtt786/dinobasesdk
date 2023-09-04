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
    return await (await this.#fetch(`sheet/${this.#note}/${uuid}`)).json();
  }

  async search(
    column: string,
    options: SearchOptions
  ): Promise<{ data: string[]; cursor?: string }> {
    const url = new URL(`${this.#url}search/${column}`);
    if (options.value) url.searchParams.append("value", options.value);
    if (options.min) url.searchParams.append("min", String(options.min));
    if (options.max) url.searchParams.append("max", String(options.max));
    if (options.limit) url.searchParams.append("limit", String(options.limit));
    if (options.cursor) url.searchParams.append("cursor", options.cursor);

    return await (await fetch(url)).json();
  }

  async insert(data: Data): Promise<string> {
    return await (
      await this.#fetch(`createsheet/${this.#note}`, {
        method: "POST",
        body: JSON.stringify(data),
      })
    ).text();
  }

  async update(uuid: string, data: Data): Promise<number> {
    return (
      await this.#fetch(`sheet/${this.#note}/${uuid}`, {
        method: "PATCH",
        body: JSON.stringify(data),
      })
    ).status;
  }

  async delete(uuid: string): Promise<number> {
    return (
      await this.#fetch(`sheet/${this.#note}/${uuid}`, {
        method: "DELETE",
      })
    ).status;
  }
}
