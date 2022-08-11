import Block from '../../service/Block';
import tpl from './tpl.hbs';
import ArrowPrevPage from '../../components/arrowPrevPage';
import Avatar from '../../components/avatar';
import src from '../../image/cat.png';
import Input from '../../components/input/index';
import ButtonBlue from '../../components/button';
import { propsInput } from '../../service/propsInput';
import {
    getResForm, inputIsNotValid, onBlur, onFocus, validMessage,
} from '../../service/valid';

export default class ChangeProfile extends Block {
    constructor(props: Record<string, any> = {}) {
        const prevArrow = new ArrowPrevPage({ href: '/profile' });
        const avatarLog = new Avatar({ displayName: 'Иван', href: '/loadAvatar', src: `${src}` });
        const {
            email, login, firstName, secondName, phone, displayName,
        } = propsInput;

        const btnSave = new ButtonBlue({
            value: 'Сохранить',
            events: {
                click: (event) => {
                    event.preventDefault();
                    const formElement = document.querySelector('form') as HTMLFormElement;
                    const inputs = formElement.querySelectorAll('input');
                    const inputEmailTarget = inputs[0];
                    const inputLoginTarget = inputs[1];
                    const inputFirstNameTarget = inputs[2];
                    const inputSecondNameTarget = inputs[3];
                    const inputPhoneTarget = inputs[5];

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

                    const obj = getResForm('form');
                    console.log(
                        'после запол-я логина в течении 4 сек произойтет перенаправление на след страницу',
                    );
                    const nextPage = () => {
                        if (obj.login) window.location.href = '/profile';
                    };
                    setTimeout(nextPage, 4000);
                },
            },
        });

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

        const inputDisplayName = new Input({
            ...displayName,
            events: {
                blur: (event) => {
                    const target = event.target as HTMLInputElement;
                    const { value } = target;
                    onBlur({
                        target,
                        value,
                        name: displayName.name,
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

        const inputsNames = {
            nameInputEmail: propsInput.email.name,
            nameInputLogin: propsInput.login.name,
            nameInputFirstName: propsInput.firstName.name,
            nameInputSecondName: propsInput.secondName.name,
            nameInputdisplayName: propsInput.displayName.name,
            nameInputPhone: propsInput.phone.name,
        };

        const inputsLabels = {
            labelInputEmail: propsInput.email.label,
            labelInputLogin: propsInput.login.label,
            labelInputFirstName: propsInput.firstName.label,
            labelInputSecondName: propsInput.secondName.label,
            labelInputdisplayName: propsInput.displayName.label,
            labelInputPhone: propsInput.phone.label,
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
            ...inputsNames,
            ...inputsLabels,
        });
    }

    render() {
        return this.compile(tpl, this.props);
    }
}
