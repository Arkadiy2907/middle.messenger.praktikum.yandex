import tpl from './tpl.hbs';
import button from '../../components/button';
import avatar from '../../components/avatar';
import blueCircle from '../../components/blueCircle';
import input from '../../components/input';
import src from '../../image/cat.png';

const props = {
	buttonTextOut: button('sign_outProfile', 'Выйти', '/'),
	changePasswordBtn: button('changePassword_btn', 'Изменить пароль', '/changePassword'),
	changeProfileBtn: button('changeProfile_btn', 'Изменить данные', '/changeProfile'),
	avatarLog: avatar(`${src}`, 'Иван'),
	prevArrow: blueCircle('arrow', '/choseChat'),
	profile: input('profile', 'readonly'),
}

export default tpl(props);