type ColumnType = "string" | "number" | "boolean" | "file" | "timestamp" | "auth";
type ValidationErrorCode = "too_small" | "too_big" | "too_short" | "too_long" | "auth_failed" | "invalid_type" | "forbidden" | "conflict" | "relationship";
interface ValidateErrorData {
    key?: string;
    code: ValidationErrorCode;
    expected?: string | number | ColumnType;
    received?: string | number | ColumnType;
}
declare class ValidateError extends Error {
    data: ValidateErrorData;
    constructor(data: ValidateErrorData);
}
export type { ValidationErrorCode };
export { ValidateError };
