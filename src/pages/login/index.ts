import Block from '../../core/Block';
import { propsInput } from '../../stubs/constantsForms';
import tpl from './tpl.hbs';
import ButtonBlue from '../../components/button';
import Link from '../../components/link';
import Input from '../../components/input/index';
import { inputIsNotValid, validMessage, getResForm } from '../../core/valid';
import { eventFocus, eventBlur } from '../../utils/eventForms';
import { router } from '../..';
import authController from '../../controllers/authController';

export type TLogin = {
    login: string;
    password: string;
};

export default class Login extends Block {
    constructor(props: Record<string, any>) {
        const { login, password } = propsInput;
        const buttonText = new Link({
            value: 'Нет аккаунта?',
            events: {
                click: (event) => {
                    event.preventDefault();
                    router.go('/registration');
                },
            },
        });

        const inputLogin = new Input({
            ...login,
            class: 'indexLogin',
            events: {
                blur: (e) => {
                    eventBlur(e, login);
                },
                focus: (e) => {
                    eventFocus(e);
                },
            },
        });

        const inputPassword = new Input({
            ...password,
            class: 'indexPassword',
            events: {
                blur: (e) => {
                    eventBlur(e, password);
                },
                focus: (e) => {
                    eventFocus(e);
                },
            },
        });

        const buttonBlue = new ButtonBlue({
            value: 'Авторизоваться',
            events: {
                click: (e) => {
                    e.preventDefault();
                    const inputLoginTarget = document.querySelector<HTMLInputElement>('.indexLogin');
                    const inputPasswordTarget = document.querySelector<HTMLInputElement>('.indexPassword');

                    const validLogin = inputIsNotValid({
                        input: validMessage.login,
                        target: inputLoginTarget!,
                        value: inputLoginTarget!.value,
                        message: validMessage.login.message,
                    });

                    const validPassword = inputIsNotValid({
                        input: validMessage.password,
                        target: inputPasswordTarget!,
                        value: inputPasswordTarget!.value,
                        message: validMessage.password.message,
                    });

                    const { login, password } = getResForm('form');
                    const data: TLogin = {
                        login,
                        password,
                    };

                    if (validLogin && validPassword) {
                        authController.login(data).then((result) => {
                            if (result?.success) {
                                router.go('/chooseChat');
                            } else {
                                router.go('/fourHundredFour');
                            }
                        });
                    }
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
