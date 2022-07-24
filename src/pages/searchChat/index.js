import tpl from './tpl.hbs';
import button from '../../components/button';
import src from '../../image/78.png'

const props = {
	src: `${src}`,
	signOut: button('signOutBtn_searchChat', 'ввыход из профиля', '/'),
	inProfile: button('inProfileBtn_searchChat', 'профиль', '/profile'),
}

export default tpl(props);
