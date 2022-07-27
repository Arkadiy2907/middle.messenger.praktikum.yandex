import tpl from './tpl.hbs';
import button from '../../components/button';
import input from '../../components/input';

const props = {
	buttonBlue: button('registration', 'Зарегистрироваться'),
	buttonText: button('enterAgain', 'Войти', '/'),
	email: input('email', 'email'),
	login: input('login', 'login'),
	first_name: input('first_name', 'first_name'),
	second_name: input('second_name', 'second_name'),
	display_name: input('display_name', 'display_name'),
	phone: input('phone', 'phone'),
}

export default tpl(props);