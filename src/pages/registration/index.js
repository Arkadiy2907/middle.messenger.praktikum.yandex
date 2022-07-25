import tpl from './tpl.hbs';
import button from '../../components/button';
import input from '../../components/input';

const props = {
	buttonBlue: button('registration', 'Зарегистрироваться'),
	buttonText: button('enterAgain', 'Войти', '/'),
	email: input('email', 'email'),
	login: input('login', 'login'),
	firstName: input('first_name', 'first_name'),
	secondName: input('second_name', 'second_name'),
	phone: input('phone', 'phone'),
}

export default tpl(props);