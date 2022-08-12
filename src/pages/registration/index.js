import tpl from './tpl.hbs';
import button from '../../components/button';
import input from '../../components/input';

const props = {
	title: 'Регистрация',
	buttonBlue: button('registration', 'Зарегистрироваться'),
	buttonText: button('enterAgain', 'Войти', '/'),
	inputReg: input('reg'),
}

export default tpl(props);