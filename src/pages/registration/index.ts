import Block from '../../service/Block';
import tpl from './tpl.hbs';
import Link from '../../components/link';
import ButtonBlue from '../../components/button';
import Input from '../../components/input/index';
import { propsInput } from '../../service/propsInput';
import {
    getResForm, inputIsNotValid, onBlur, onFocus, validMessage,
} from '../../service/valid';

export default class Registration extends Block {
    constructor(props: Record<string, any> = {}) {
        const buttonText = new Link({ value: 'Войти', href: '/' });

        const {
            email, login, firstName, secondName, phone, password, passwordAgain,
        } = propsInput;

        const inputEmail = new Input({
            ...email,
            events: {
                blur: (event) => {
                    const target = event.target as HTMLInputElement;
                    const { value } = target;
                    onBlur({
                        target,
                        value,
                        name: email.name,
                    });
                },
                focus: (event) => {
                    const target = event.target as HTMLInputElement;
                    onFocus({ target });
                },
            },
        });

        const inputLogin = new Input({
            ...login,
            events: {
                blur: (event) => {
                    const target = event.target as HTMLInputElement;
                    const { value } = target;
                    onBlur({
                        target,
                        value,
                        name: login.name,
                    });
                },
                focus: (event) => {
                    const target = event.target as HTMLInputElement;
                    onFocus({ target });
                },
            },
        });

        const inputFirstName = new Input({
            ...firstName,
            events: {
                blur: (event) => {
                    const target = event.target as HTMLInputElement;
                    const { value } = target;
                    onBlur({
                        target,
                        value,
                        name: firstName.name,
                    });
                },
                focus: (event) => {
                    const target = event.target as HTMLInputElement;
                    onFocus({ target });
                },
            },
        });

        const inputSecondName = new Input({
            ...secondName,
            events: {
                blur: (event) => {
                    const target = event.target as HTMLInputElement;
                    const { value } = target;
                    onBlur({
                        target,
                        value,
                        name: secondName.name,
                    });
                },
                focus: (event) => {
                    const target = event.target as HTMLInputElement;
                    onFocus({ target });
                },
            },
        });

        const inputPhone = new Input({
            ...phone,
            events: {
                blur: (event) => {
                    const target = event.target as HTMLInputElement;
                    const { value } = target;
                    onBlur({
                        target,
                        value,
                        name: phone.name,
                    });
                },
                focus: (event) => {
                    const target = event.target as HTMLInputElement;
                    onFocus({ target });
                },
            },
        });

        const inputPassword = new Input({
            ...password,
            events: {
                blur: (event) => {
                    const target = event.target as HTMLInputElement;
                    const { value } = target;
                    onBlur({
                        target,
                        value,
                        name: password.name,
                    });
                },
                focus: (event) => {
                    const target = event.target as HTMLInputElement;
                    onFocus({ target });
                },
            },
        });

        const inputPasswordAgain = new Input({
            ...passwordAgain,
            events: {
                blur: (event) => {
                    const target = event.target as HTMLInputElement;
                    const { value } = target;
                    onBlur({
                        target,
                        value,
                        name: passwordAgain.name,
                    });
                },
                focus: (event) => {
                    const target = event.target as HTMLInputElement;
                    onFocus({ target });
                },
            },
        });

        const buttonBlue = new ButtonBlue({
            value: 'Зарегистрироваться',
            events: {
                click: (event) => {
                    event.preventDefault();
                    const formElement = document.querySelector('form') as HTMLFormElement;
                    const inputs = formElement.querySelectorAll('input');
                    const inputEmailTarget = inputs[0];
                    const inputLoginTarget = inputs[1];
                    const inputFirstNameTarget = inputs[2];
                    const inputSecondNameTarget = inputs[3];
                    const inputPhoneTarget = inputs[4];
                    const inputPasswordTarget = inputs[5];
                    const inputPasswordAgainTarget = inputs[6];

                    inputIsNotValid({
                        input: validMessage.email,
                        target: inputEmailTarget,
                        value: inputEmailTarget.value,
                        message: validMessage.email.message,
                    });

                    inputIsNotValid({
                        input: validMessage.login,
                        target: inputLoginTarget,
                        value: inputLoginTarget.value,
                        message: validMessage.login.message,
                    });

                    inputIsNotValid({
                        input: validMessage.firstName,
                        target: inputFirstNameTarget,
                        value: inputFirstNameTarget.value,
                        message: validMessage.firstName.message,
                    });

                    inputIsNotValid({
                        input: validMessage.secondName,
                        target: inputSecondNameTarget,
                        value: inputSecondNameTarget.value,
                        message: validMessage.secondName.message,
                    });

                    inputIsNotValid({
                        input: validMessage.phone,
                        target: inputPhoneTarget,
                        value: inputPhoneTarget.value,
                        message: validMessage.phone.message,
                    });

                    inputIsNotValid({
                        input: validMessage.password,
                        target: inputPasswordTarget,
                        value: inputPasswordTarget.value,
                        message: validMessage.password.message,
                    });

                    inputIsNotValid({
                        input: validMessage.passwordAgain,
                        target: inputPasswordAgainTarget,
                        value: inputPasswordAgainTarget.value,
                        message: validMessage.passwordAgain.message,
                    });

                    const obj = getResForm('form');
                    console.log(
                        'после запол-я логина в течении 4 сек произойтет перенаправление на след страницу',
                    );
                    const nextPage = () => {
                        if (obj.login) {
                            window.location.href = '/chooseChat';
                        }
                    };
                    setTimeout(nextPage, 4000);
                },
            },
        });

        const inputsNames = {
            nameInputEmail: propsInput.email.name,
            nameInputLogin: propsInput.login.name,
            nameInputFirstName: propsInput.firstName.name,
            nameInputSecondName: propsInput.secondName.name,
            nameInputPhone: propsInput.phone.name,
            nameInputPassword: propsInput.password.name,
            nameInputPasswordAgain: propsInput.passwordAgain.name,
        };

        const inputsLabels = {
            labelInputEmail: propsInput.email.label,
            labelInputLogin: propsInput.login.label,
            labelInputFirstName: propsInput.firstName.label,
            labelInputSecondName: propsInput.secondName.label,
            labelInputPhone: propsInput.phone.label,
            labelInputPassword: propsInput.password.label,
            labelInputPasswordAgain: propsInput.passwordAgain.label,
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
            ...inputsNames,
            ...inputsLabels,
        });
    }

    render() {
        return this.compile(tpl, this.props);
    }
}
