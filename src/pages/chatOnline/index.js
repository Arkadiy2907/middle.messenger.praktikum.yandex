import tpl from './tpl.hbs';
import button from '../../components/button';
import src from '../../image/78.png'

const props = {
	src: `${src}`,
	signOut: button('signOutBtn', 'ввыход из профиля', '/'),
	inProfile: button('inProfileBtn', 'профиль', '/profile'),
}

export default tpl(props);