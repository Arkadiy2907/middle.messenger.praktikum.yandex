import tpl from './tpl.hbs';
import button from '../../components/button';
import avatar from '../../components/avatar';
import src from '../../image/cat.png';
import input from '../../components/input'

const props = {
	btn_save: button('btn_saveChange', 'Сохранить'),
	avatarLog: avatar(`${src}`, 'Иван'),
	email: input('email', 'email'),
	login: input('login', 'login'),
	first_name: input('first_name', 'first_name'),
	second_name: input('second_name', 'second_name'),
	phone: input('phone', 'phone'),
}

export default tpl(props);