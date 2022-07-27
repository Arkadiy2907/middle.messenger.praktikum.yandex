import tpl from './tpl.hbs';
import button from '../../components/button';
import blueCircle from '../../components/blueCircle'
import chat from "../../components/chat"
import src from '../../image/78.png'

const props = {
	src: `${src}`,
	signOut: button('signOutBtn', 'ввыход из профиля', '/'),
	inProfile: button('inProfileBtn', 'профиль', '/profile'),
	buttonBlue: button('btnSearchInChatOnline', 'Поиск чата'),
	sendMassge: blueCircle('sendMassage', '#'),
	chat1: chat('none', 'Chat Online!', '/chatOnline', 'upss:',
		'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, odit. Iusto, voluptate exercitationem repudiandae voluptatem voluptatibus sequi. Quibusdam error, molestias eveniet possimus quaerat vel accusamus qui repudiandae, deserunt expedita minima!',
		'11:05'),
	chat2: chat('newMassage', '404!', '/fourHundredFour', undefined, 'Hundred Four 404!', '01:00', '8'),
	chat3: chat('newMassage', '500!', '/fiveHundred', undefined, 'Five Hundred! 500!', '11:00', '5'),
	chat4: chat('newMassage', 'no chat!', '/choseChat', undefined, 'no chat!', '03:00', '10'),
}

export default tpl(props);