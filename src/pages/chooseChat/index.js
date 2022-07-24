import tpl from './tpl.hbs';
import button from '../../components/button';
import src from '../../image/78.png'

const props = {
	src: `${src}`,
	signOut: button('signOutBtn_chooseChat', 'ввыход из профиля', '/'),
	inProfile: button('inProfileBtn_chooseChat', 'профиль', '/profile'),
}

export default tpl(props);
