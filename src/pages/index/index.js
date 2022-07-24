import tpl from './tpl.hbs';
import button from '../../components/button';
import input from '../../components/input';

const props = {
	title: 'Вход',
	buttonBlue: button('enter', 'Авторизоваться'),
	buttonText: button('register', 'Нет аккаунта?', '/registration'),
	inputLogin: input('login', 'login'),
}

export default tpl(props);