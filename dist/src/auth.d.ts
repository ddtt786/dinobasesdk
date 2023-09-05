declare class Auth {
    #private;
    uuid: string;
    constructor(url: string);
    signIn(username: string, password: string): Promise<unknown>;
    signUp(username: string, password: string): Promise<unknown>;
    logout(): Promise<number>;
}
export { Auth };
