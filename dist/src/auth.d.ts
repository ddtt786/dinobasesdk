declare class Auth {
    #private;
    constructor(url: string);
    signIn(username: string, password: string): Promise<number>;
    signUp(username: string, password: string): Promise<number>;
    logout(): Promise<void>;
}
export { Auth };
