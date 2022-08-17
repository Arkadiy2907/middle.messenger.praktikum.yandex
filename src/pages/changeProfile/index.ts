import Block from '../../core/Block';
import tpl from './tpl.hbs';
import ArrowPrevPage from '../../components/arrowPrevPage';
import Avatar from '../../components/avatar';
import src from '../../image/cat.png';
import Input from '../../components/input/index';
import ButtonBlue from '../../components/button';
import { propsInput } from '../../stubs/constantsForms';
import { inputIsNotValid, validMessage } from '../../core/valid';
import { eventFocus, eventBlur } from '../../utils/eventForms';
import { goNextPage } from '../../utils/nextPage';

export default class ChangeProfile extends Block {
    constructor(props: Record<string, any> = {}) {
        const prevArrow = new ArrowPrevPage({ href: '/profile' });
        const avatarLog = new Avatar({ displayName: 'Иван', href: '/loadAvatar', src: `${src}` });
        const {
            email, login, firstName, secondName, phone, displayName,
        } = propsInput;

        const inputEmail = new Input({
            ...email,
            class: 'changeProfileEmail',
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
            class: 'changeProfileLogin',
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
            class: 'changeProfileFirstName',
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
            class: 'changeProfileSecondName',
            events: {
                blur: (e) => {
                    eventBlur(e, secondName);
                },
                focus: (e) => {
                    eventFocus(e);
                },
            },
        });

        const inputDisplayName = new Input({
            ...displayName,
            class: 'changeProfileDisplayName',
            events: {
                blur: (e) => {
                    eventBlur(e, displayName);
                },
                focus: (e) => {
                    eventFocus(e);
                },
            },
        });

        const inputPhone = new Input({
            ...phone,
            class: 'changeProfilePhone',
            events: {
                blur: (e) => {
                    eventBlur(e, phone);
                },
                focus: (e) => {
                    eventFocus(e);
                },
            },
        });

        const btnSave = new ButtonBlue({
            value: 'Сохранить',
            type: 'submit',
            events: {
                click: (e) => {
                    e.preventDefault();
                    const inputEmailTarget = document.querySelector<HTMLInputElement>('.changeProfileEmail');
                    const inputLoginTarget = document.querySelector<HTMLInputElement>('.changeProfileLogin');
                    const inputFirstNameTarget = document.querySelector<HTMLInputElement>('.changeProfileFirstName');
                    const inputSecondNameTarget = document.querySelector<HTMLInputElement>('.changeProfileSecondName');
                    const inputPhoneTarget = document.querySelector<HTMLInputElement>('.changeProfilePhone');

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

                    goNextPage('/profile');
                },
            },
        });

        const forTitle = {
            titleEmail: propsInput.email.label,
            titleLogin: propsInput.login.label,
            titleFirstName: propsInput.firstName.label,
            titleSecondName: propsInput.secondName.label,
            titledisplayName: propsInput.displayName.label,
            titlePhone: propsInput.phone.label,
        };

        super('div', {
            ...props,
            prevArrow,
            avatarLog,
            btnSave,
            inputEmail,
            inputLogin,
            inputFirstName,
            inputSecondName,
            inputDisplayName,
            inputPhone,
            ...forTitle,
        });
    }

    render() {
        return this.compile(tpl, this.props);
    }
}
