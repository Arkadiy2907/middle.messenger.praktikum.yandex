import { propsInput } from './propsInput';

interface IValidMessage {
    message: string;
    regExp?: RegExp;
    isValid: (value: any) => boolean;
}

interface InputIsNotValid {
    input: IValidMessage;
    target: HTMLInputElement;
    value: any;
    message: string;
}

interface IBlurProps {
    target: HTMLInputElement;
    value: any;
    name: string;
}

interface ITarget {
    target: HTMLInputElement;
}

export const getResForm = (form: string) => {
    const dataObject: Record<string, any> = {};
    const formElement = document.querySelector(form) as HTMLFormElement;
    const formData = new FormData(formElement);
    for (const [name, value] of formData) {
        dataObject[name] = value;
    }

    console.log(dataObject);
    return dataObject;
};

export const inputIsNotValid = ({
    input, target, value, message,
}: InputIsNotValid) => {
    !input.isValid(value) && addErrorMessage(target, message);
};

export const onBlur = ({ target, value, name }: IBlurProps) => {
    const {
        login, firstName, secondName, email, oldPassword, password, passwordAgain, phone,
    } = validMessage;

    switch (name) {
    case propsInput.login.name:
        value !== ''
                && inputIsNotValid({
                    input: login,
                    target,
                    value,
                    message: login.message,
                });
        break;
    case propsInput.firstName.name:
        value !== ''
                && inputIsNotValid({
                    input: firstName,
                    target,
                    value,
                    message: firstName.message,
                });
        break;
    case propsInput.secondName.name:
        value !== ''
                && inputIsNotValid({
                    input: secondName,
                    target,
                    value,
                    message: secondName.message,
                });
        break;
    case propsInput.email.name:
        value !== ''
                && inputIsNotValid({
                    input: email,
                    target,
                    value,
                    message: email.message,
                });
        break;
    case propsInput.oldPassword.name:
        value !== ''
                && inputIsNotValid({
                    input: oldPassword,
                    target,
                    value,
                    message: oldPassword.message,
                });
        break;
    case propsInput.password.name:
        value !== ''
                && inputIsNotValid({
                    input: password,
                    target,
                    value,
                    message: password.message,
                });
        break;
    case propsInput.passwordAgain.name:
        value !== ''
                && inputIsNotValid({
                    input: passwordAgain,
                    target,
                    value,
                    message: passwordAgain.message,
                });
        break;
    case propsInput.phone.name:
        value !== ''
                && inputIsNotValid({
                    input: phone,
                    target,
                    value,
                    message: phone.message,
                });
        break;
    }
};

export const validMessage = {
    login: {
        message:
            'от 3 до 20 символов, латиница, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов.',
        regExp: /^[a-zA-Z0-9-_]{3,20}$(?<=.*?[a-zA-Z].*?)/,
        isValid(value: string) {
            return this.regExp.test(value);
        },
    },
    firstName: {
        message: 'первая буква должна быть заглавной, без пробелов и без цифр, (допустим дефис)',
        regExp: /^[A-Z-А-Я]+[A-Za-zА-Яа-я-]+$/,
        isValid(value: string) {
            return this.regExp.test(value);
        },
    },
    secondName: {
        message:
            'первая буква должна быть заглавной, без пробелов и без цифр, (допустим только дефис)',
        regExp: /^[A-Z-А-Я]+[A-Za-zА-Яа-я-]+$/,
        isValid(value: string) {
            return this.regExp.test(value);
        },
    },
    email: {
        message:
            'латиница, обязательно должна быть «собака» (@) и точка после неё, но перед точкой обязательно должны быть буквы.',
        regExp: /^[a-z0-9-]+@[a-z0-9-]+.[a-z]{2,6}$/,
        isValid(value: string) {
            return this.regExp.test(value);
        },
    },
    oldPassword: {
        message: 'от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра.',
        regExp: /^(?=.*?[A-Z]+)(?=.*?[0-9]+).{8,40}$/,
        isValid(value: string) {
            return this.regExp.test(value);
        },
    },
    password: {
        message: 'от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра.',
        regExp: /^(?=.*?[A-Z]+)(?=.*?[0-9]+).{8,40}$/,
        isValid(value: string) {
            return this.regExp.test(value);
        },
    },
    passwordAgain: {
        message: 'от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра.',
        regExp: /^(?=.*?[A-Z]+)(?=.*?[0-9]+).{8,40}$/,
        isValid(value: string) {
            return this.regExp.test(value);
        },
    },
    phone: {
        message: 'от 10 до 15 символов, состоит из цифр, может начинается с плюса.',
        regExp: /^([0-9]+).{10,15}$/,
        isValid(value: string) {
            return this.regExp.test(value);
        },
    },
};

export const onFocus = ({ target }: ITarget) => {
    removeErrorMessage(target);
};

export const addErrorMessage = (input: any, message: string) => {
    const error = input.parentNode.children[1];
    error.style.visibility = 'visible';
    error.textContent = message;
};

export const removeErrorMessage = (target: any) => {
    const error = target.parentNode.children[1];
    error.style.visibility = 'hidden';
    error.textContent = '';
};
