export interface IRules {
    rule: string;
    message: string;
}

export interface ITextAttribute {
    label?: string;
    type?: string;
    placeholder?: string;
    matlabel?: string;
    disable?: boolean;
    readonly?: boolean;
    inputClass?: string;
    isMandatory?: boolean;
    validateOninit?: boolean;
    appearance?: string;
    prefixIcon?: string;
    prefixIconImg?: string;
    suffixIcon?: string;
    togglePassword?: boolean;
    isOptional?: boolean;
    pattern?: RegExp | string;
    customPatternMessage?: string;
    class?: string;
    hint?: string;
}

export interface ITextConfig {
    fieldKey: string;
    attributes?: ITextAttribute;
    pickerConfig?: any;
    api?: any;
}
