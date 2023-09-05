interface SearchOptions {
    value?: string;
    min?: number | string;
    max?: number | string;
    cursor?: string;
    limit?: number;
}
type Data = {
    [key: string]: string | boolean | number | undefined;
};
declare class Note {
    #private;
    constructor(url: string, name: string);
    getOne(uuid: string): Promise<Data>;
    search(column: string, options: SearchOptions): Promise<{
        data: string[];
        cursor?: string;
    }>;
    insert(data: Data): Promise<string>;
    update(uuid: string, data: Data): Promise<unknown>;
    delete(uuid: string): Promise<unknown>;
    list(): Promise<unknown>;
}
export { Note };
