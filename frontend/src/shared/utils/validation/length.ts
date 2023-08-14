import { validatorFn } from "./models/ValidatorFn";
import { LengthOptions } from "./models/options/length";

const _validateLength: validatorFn = (text: string, options?: LengthOptions): boolean =>{
    const textLength = text.trim().length;

    if( options?.min && textLength < options.min ) return false;
    if( options?.max && textLength > options.max ) return false;

    return true;
}

export const validateNameLength: validatorFn = (text: string): boolean => {
    return _validateLength(text, {min: 5});
}

export const validatePasswordLength: validatorFn = (text: string): boolean => {
    return _validateLength(text, {min: 8, max: 30});
}
