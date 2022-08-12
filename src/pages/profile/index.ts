import tpl from './tpl.hbs';
import Block from '../../service/Block';
import ArrowPrevPage from '../../components/arrowPrevPage';
import Link from '../../components/link';
import Avatar from '../../components/avatar';
import Input from '../../components/input';
import { propsInput } from '../../service/propsInput';
import src from '../../image/cat.png';

export default class Profile extends Block {
    constructor(props: Record<string, any> = {}) {
        const prevArrow = new ArrowPrevPage({ href: '/chooseChat' });
        const changeProfileBtn = new Link({ value: 'Изменить данные', href: '/changeProfile' });
        const changePasswordBtn = new Link({ value: 'Изменить пароль', href: '/changePassword' });
        const buttonTextOut = new Link({ value: 'Ввыход из профиля', href: '/' });
        const avatarLog = new Avatar({ displayName: 'Иван', href: '/loadAvatar', src: `${src}` });
        const {
            email, login, firstName, secondName, phone, displayName,
        } = propsInput;
        const inputEmail = new Input({
            ...email,
            readonly: 'readonly',
        });

        const inputLogin = new Input({
            ...login,
            readonly: 'readonly',
        });

        const inputFirstName = new Input({
            ...firstName,
            readonly: 'readonly',
        });

        const inputSecondName = new Input({
            ...secondName,
            readonly: 'readonly',
        });

        const inputDisplayName = new Input({
            ...displayName,
            readonly: 'readonly',
        });

        const inputPhone = new Input({
            ...phone,
            readonly: 'readonly',
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
            changeProfileBtn,
            changePasswordBtn,
            buttonTextOut,
            avatarLog,
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
