import Block from '../../core/Block';
import tpl from './tpl.hbs';
import Link from '../../components/link';
import ButtonBlue from '../../components/button';
import Input from '../../components/input/index';
import { propsInput } from '../../stubs/constantsForms';
import { inputIsNotValid, validMessage } from '../../core/valid';
import { eventFocus, eventBlur } from '../../utils/eventForms';
import { goNextPage } from '../../utils/nextPage';

export default class Registration extends Block {
    constructor(props: Record<string, any> = {}) {
        const buttonText = new Link({ value: 'Войти', href: '/' });

        const {
            email, login, firstName, secondName, phone, password, passwordAgain,
        } = propsInput;

        const inputEmail = new Input({
            ...email,
            class: 'registrationEmail',
            events: {
                blur: (e) => {
                    eventBlur(e, email);
                },
                focus: (e) => {
                    eventFocus(e);
                },
            },
        });

        const inputLogin = new Input({
            ...login,
            class: 'registrationLogin',
            events: {
                blur: (e) => {
                    eventBlur(e, login);
                },
                focus: (e) => {
                    eventFocus(e);
                },
            },
        });

        const inputFirstName = new Input({
            ...firstName,
            class: 'registrationFirstName',
            events: {
                blur: (e) => {
                    eventBlur(e, firstName);
                },
                focus: (e) => {
                    eventFocus(e);
                },
            },
        });

        const inputSecondName = new Input({
            ...secondName,
            class: 'registrationSecondName',
            events: {
                blur: (e) => {
                    eventBlur(e, secondName);
                },
                focus: (e) => {
                    eventFocus(e);
                },
            },
        });

        const inputPhone = new Input({
            ...phone,
            class: 'registrationPhone',
            events: {
                blur: (e) => {
                    eventBlur(e, phone);
                },
                focus: (e) => {
                    eventFocus(e);
                },
            },
        });

        const inputPassword = new Input({
            ...password,
            class: 'registrationPassword',
            events: {
                blur: (e) => {
                    eventBlur(e, password);
                },
                focus: (e) => {
                    eventFocus(e);
                },
            },
        });

        const inputPasswordAgain = new Input({
            ...passwordAgain,
            class: 'registrationPasswordAgain',
            events: {
                blur: (e) => {
                    eventBlur(e, passwordAgain);
                },
                focus: (e) => {
                    eventFocus(e);
                },
            },
        });

        const buttonBlue = new ButtonBlue({
            value: 'Зарегистрироваться',
            type: 'submit',
            events: {
                click: (e) => {
                    e.preventDefault();
                    const inputEmailTarget = document.querySelector<HTMLInputElement>('.registrationEmail');
                    const inputLoginTarget = document.querySelector<HTMLInputElement>('.registrationLogin');
                    const inputFirstNameTarget = document.querySelector<HTMLInputElement>('.registrationFirstName');
                    const inputSecondNameTarget = document.querySelector<HTMLInputElement>('.registrationSecondName');
                    const inputPhoneTarget = document.querySelector<HTMLInputElement>('.registrationPhone');
                    const inputPasswordTarget = document.querySelector<HTMLInputElement>('.registrationPassword');
                    const inputPasswordAgainTarget = document.querySelector<HTMLInputElement>('.registrationPasswordAgain');

                    inputIsNotValid({
                        input: validMessage.email,
                        target: inputEmailTarget!,
                        value: inputEmailTarget!.value,
                        message: validMessage.email.message,
                    });

                    inputIsNotValid({
                        input: validMessage.login,
                        target: inputLoginTarget!,
                        value: inputLoginTarget!.value,
                        message: validMessage.login.message,
                    });

                    inputIsNotValid({
                        input: validMessage.firstName,
                        target: inputFirstNameTarget!,
                        value: inputFirstNameTarget!.value,
                        message: validMessage.firstName.message,
                    });

                    inputIsNotValid({
                        input: validMessage.secondName,
                        target: inputSecondNameTarget!,
                        value: inputSecondNameTarget!.value,
                        message: validMessage.secondName.message,
                    });

                    inputIsNotValid({
                        input: validMessage.phone,
                        target: inputPhoneTarget!,
                        value: inputPhoneTarget!.value,
                        message: validMessage.phone.message,
                    });

                    inputIsNotValid({
                        input: validMessage.password,
                        target: inputPasswordTarget!,
                        value: inputPasswordTarget!.value,
                        message: validMessage.password.message,
                    });

                    inputIsNotValid({
                        input: validMessage.passwordAgain,
                        target: inputPasswordAgainTarget!,
                        value: inputPasswordAgainTarget!.value,
                        message: validMessage.passwordAgain.message,
                    });

                    goNextPage('/chooseChat');
                },
            },
        });

        const forTitle = {
            titleEmail: propsInput.email.label,
            titleLogin: propsInput.login.label,
            titleFirstName: propsInput.firstName.label,
            titleSecondName: propsInput.secondName.label,
            titlePhone: propsInput.phone.label,
            titlePassword: propsInput.password.label,
            titlePasswordAgain: propsInput.passwordAgain.label,
        };

        super('div', {
            ...props,
            inputEmail,
            inputLogin,
            inputFirstName,
            inputSecondName,
            inputPhone,
            inputPassword,
            inputPasswordAgain,
            buttonText,
            buttonBlue,
            title: 'Регистрация',
            ...forTitle,
        });
    }

    render() {
        return this.compile(tpl, this.props);
    }
}
