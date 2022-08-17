import Block from '../../core/Block';
import tpl from './tpl.hbs';
import ArrowPrevPage from '../../components/arrowPrevPage';
import Avatar from '../../components/avatar';
import ButtonBlue from '../../components/button';
import src from '../../image/cat.png';
import Input from '../../components/input';
import { propsInput } from '../../stubs/constantsForms';
import { inputIsNotValid, validMessage } from '../../core/valid';
import { eventFocus, eventBlur } from '../../utils/eventForms';
import { goNextPage } from '../../utils/nextPage';

export default class ChangePassword extends Block {
    constructor(props: Record<string, any> = {}) {
        const prevArrow = new ArrowPrevPage({ href: '/profile' });
        const avatarLog = new Avatar({ displayName: 'Иван', href: '/loadAvatar', src: `${src}` });

        const { oldPassword, password, passwordAgain } = propsInput;

        const inputOldPassword = new Input({
            ...oldPassword,
            class: 'changePasswordOldPassword',
            events: {
                blur: (e) => {
                    eventBlur(e, oldPassword);
                },
                focus: (e) => {
                    eventFocus(e);
                },
            },
        });
        const inputPassword = new Input({
            ...password,
            class: 'changePasswordPassword',
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
            class: 'changePasswordPasswordAgain',
            events: {
                blur: (e) => {
                    eventBlur(e, passwordAgain);
                },
                focus: (e) => {
                    eventFocus(e);
                },
            },
        });
        const btnSaveCangePasword = new ButtonBlue({
            value: 'Сохранить',
            type: 'submit',
            events: {
                click: (e) => {
                    e.preventDefault();
                    const inputOldPasswordTarget = document.querySelector<HTMLInputElement>('.changePasswordOldPassword');
                    const inputPasswordTarget = document.querySelector<HTMLInputElement>('.changePasswordPassword');
                    const inputPasswordAgainTarget = document.querySelector<HTMLInputElement>('.changePasswordPasswordAgain');

                    inputIsNotValid({
                        input: validMessage.oldPassword,
                        target: inputOldPasswordTarget!,
                        value: inputOldPasswordTarget!.value,
                        message: validMessage.oldPassword.message,
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

                    goNextPage('/profile');
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
