declare class FileStorage {
    #private;
    constructor(url: string);
    upload(data: File): Promise<unknown>;
    remove(uuid: string): Promise<unknown>;
}
export { FileStorage };
