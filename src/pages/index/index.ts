import Block from '../../service/Block';
import { propsInput } from '../../service/propsInput';
import tpl from './tpl.hbs';
import ButtonBlue from '../../components/button';
import Link from '../../components/link';
import Input from '../../components/input/index';
import {
    getResForm, inputIsNotValid, onBlur, onFocus, validMessage,
} from '../../service/valid';

export default class Index extends Block {
    constructor(props: Record<string, any> = {}) {
        const { login, password } = propsInput;
        const buttonText = new Link({ value: 'Нет аккаунта?', href: '/registration' });

        const inputLogin = new Input({
            ...login,
            events: {
                blur: (e) => {
                    const target = e.target as HTMLInputElement;
                    const { value } = target;
                    onBlur({
                        target,
                        value,
                        name: login.name,
                    });
                },
                focus: (e) => {
                    const target = e.target as HTMLInputElement;
                    onFocus({ target });
                },
            },
        });

        const inputPassword = new Input({
            ...password,
            events: {
                blur: (e) => {
                    const target = e.target as HTMLInputElement;
                    const { value } = target;
                    onBlur({
                        target,
                        value,
                        name: password.name,
                    });
                },
                focus: (e) => {
                    const target = e.target as HTMLInputElement;
                    onFocus({ target });
                },
            },
        });

        const buttonBlue = new ButtonBlue({
            value: 'Авторизоваться',
            events: {
                click: (e) => {
                    e.preventDefault();
                    const formElement = document.querySelector('form') as HTMLFormElement;
                    const inputs = formElement.querySelectorAll('input');
                    const inputLoginTarget = inputs[0];
                    const inputPasswordTarget = inputs[1];

                    inputIsNotValid({
                        input: validMessage.login,
                        target: inputLoginTarget,
                        value: inputLoginTarget.value,
                        message: validMessage.login.message,
                    });

                    inputIsNotValid({
                        input: validMessage.password,
                        target: inputPasswordTarget,
                        value: inputPasswordTarget.value,
                        message: validMessage.password.message,
                    });
                    const obj = getResForm('form');
                    console.log('после запол-я логина в течении 4 сек произойтет перенаправление на след страницу');
                    const nextPage = () => {
                        if (obj.login) {
                            window.location.href = '/chooseChat';
                        }
                    };
                    setTimeout(nextPage, 14000);
                },
            },
        });

        const forTitle = {
            titleLogin: propsInput.login.label,
            titlePassword: propsInput.password.label,
        };

        super('div', {
            ...props,
            buttonText,
            inputLogin,
            inputPassword,
            buttonBlue,
            title: 'Вход',
            ...forTitle,
        });
    }

    render() {
        return this.compile(tpl, this.props);
    }
}
