declare class Auth {
    #private;
    constructor(url: string);
    signIn(username: string, password: string): Promise<unknown>;
    signUp(username: string, password: string): Promise<unknown>;
    logout(): Promise<unknown>;
}
export { Auth };
