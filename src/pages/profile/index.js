import tpl from './tpl.hbs';
import button from '../../components/button';
import avatar from '../../components/avatar'
import src from '../../image/cat.png'

const props = {
	buttonTextOut: button('sign_outProfile', 'Выйти', '/'),
	changePassword_btn: button('changePassword_btn', 'Изменить пароль', '/changePassword'),
	changeProfile_btn: button('changeProfile_btn', 'Изменить данные', '/changeProfile'),
	avatarLog: avatar(`${src}`, 'Иван')
}

export default tpl(props);