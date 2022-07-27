import tpl from './tpl.hbs';
import button from '../../components/button';
import blueCircle from '../../components/blueCircle'
import chat from "../../components/chat"
import src from '../../image/78.png'

const props = {
	src: `${src}`,
	signOut: button('signOutBtn_searchChat', 'ввыход из профиля', '/'),
	inProfile: button('inProfileBtn_searchChat', 'профиль', '/profile'),
	buttonBlue: button('btnSearchInSeachChat', 'Поиск чата'),
	sendMassge: blueCircle('sendMassage', '#'),
	chat1: chat('none', 'Chat Online!', '/chatOnline', 'upss:',
		'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, odit. Iusto, voluptate exercitationem repudiandae voluptatem voluptatibus sequi. Quibusdam error, molestias eveniet possimus quaerat vel accusamus qui repudiandae, deserunt expedita minima!',
		'11:05'),
}

export default tpl(props);
