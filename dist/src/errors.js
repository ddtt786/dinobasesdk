class ValidateError extends Error {
    data;
    constructor(data) {
        super("validation error");
        this.name = "ValidateError";
        this.data = data;
    }
}
export { ValidateError };
