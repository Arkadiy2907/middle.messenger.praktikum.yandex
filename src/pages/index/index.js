import tpl from './tpl.hbs';
import button from '../../components/button';
import input from '../../components/input';

const props = {
	title: 'Вход',
	buttonBlue: button('enter', 'Авторизоваться'),
	buttonText: button('register', 'Нет аккаунта?', '/registration'),
	inputIndex: input('index'),
}

export default tpl(props);