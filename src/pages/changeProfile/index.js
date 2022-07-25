import tpl from './tpl.hbs';
import button from '../../components/button';
import avatar from '../../components/avatar';
import src from '../../image/cat.png';
import input from '../../components/input'

const props = {
	btnSave: button('btn_saveChange', 'Сохранить'),
	avatarLog: avatar(`${src}`, 'Иван'),
	email: input('email', 'email'),
	login: input('login', 'login'),
	firstName: input('first_name', 'first_name'),
	secondName: input('second_name', 'second_name'),
	displayName: input('display_name', 'display_name'),
	phone: input('phone', 'phone'),
}

export default tpl(props);