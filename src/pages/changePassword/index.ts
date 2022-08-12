import Block from '../../service/Block';
import tpl from './tpl.hbs';
import ArrowPrevPage from '../../components/arrowPrevPage';
import Avatar from '../../components/avatar';
import ButtonBlue from '../../components/button';
import src from '../../image/cat.png';
import Input from '../../components/input';
import { propsInput } from '../../service/propsInput';
import {
    getResForm, inputIsNotValid, onBlur, onFocus, validMessage,
} from '../../service/valid';

export default class ChangePassword extends Block {
    constructor(props: Record<string, any> = {}) {
        const prevArrow = new ArrowPrevPage({ href: '/profile' });
        const avatarLog = new Avatar({ displayName: 'Иван', href: '/loadAvatar', src: `${src}` });

        const { oldPassword, password, passwordAgain } = propsInput;

        const inputOldPassword = new Input({
            ...oldPassword,
            events: {
                blur: (e) => {
                    const target = e.target as HTMLInputElement;
                    const { value } = target;

                    onBlur({
                        target,
                        value,
                        name: oldPassword.name,
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

        const inputPasswordAgain = new Input({
            ...passwordAgain,
            events: {
                blur: (e) => {
                    const target = e.target as HTMLInputElement;
                    const { value } = target;
                    onBlur({
                        target,
                        value,
                        name: passwordAgain.name,
                    });
                },
                focus: (e) => {
                    const target = e.target as HTMLInputElement;
                    onFocus({ target });
                },
            },
        });
        const btnSaveCangePasword = new ButtonBlue({
            value: 'Сохранить',
            events: {
                click: (e) => {
                    e.preventDefault();
                    const formElement = document.querySelector('form') as HTMLFormElement;
                    const inputs = formElement.querySelectorAll('input');
                    const inputOldPasswordTarget = inputs[0];
                    const inputPasswordTarget = inputs[1];
                    const inputPasswordAgainTarget = inputs[2];

                    inputIsNotValid({
                        input: validMessage.oldPassword,
                        target: inputOldPasswordTarget,
                        value: inputOldPasswordTarget.value,
                        message: validMessage.oldPassword.message,
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
                    console.log('после запол-я в течении 4 сек произойтет перенаправление на след страницу');
                    const nextPage = () => {
                        if (obj) window.location.href = '/profile';
                    };
                    setTimeout(nextPage, 4000);
                },
            },
        });

        const forTitle = {
            titleOldPassword: propsInput.oldPassword.label,
            titlePassword: propsInput.password.label,
            titlePasswordAgain: propsInput.passwordAgain.label,
        };

        super('div', {
            ...props,
            prevArrow,
            avatarLog,
            inputOldPassword,
            inputPassword,
            inputPasswordAgain,
            btnSaveCangePasword,
            ...forTitle,
        });
    }

    render() {
        return this.compile(tpl, this.props);
    }
}
