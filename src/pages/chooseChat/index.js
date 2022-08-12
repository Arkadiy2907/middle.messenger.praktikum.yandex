import tpl from './tpl.hbs';
import button from '../../components/button';
import chat from "../../components/chat"
import src from '../../image/78.png'

const props = {
	src: `${src}`,
	signOut: button('signOutBtn_chooseChat', 'ввыход из профиля', '/'),
	buttonBlue: button('btnSearchInChooseChat', 'Поиск чата'),
	inProfile: button('inProfileBtn_chooseChat', 'профиль', '/profile'),
	chat1: chat('newMassage', '500!', '/fiveHundred', undefined, 'Five Hundred! 500!', '11:00', '5'),
	chat2: chat('newMassage', '404!', '/fourHundredFour', undefined, 'Hundred Four 404!', '01:00', '8'),
	chat3: chat('none', 'Chat Online!', '/chatOnline', 'upss:',
		'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, odit. Iusto, voluptate exercitationem repudiandae voluptatem voluptatibus sequi. Quibusdam error, molestias eveniet possimus quaerat vel accusamus qui repudiandae, deserunt expedita minima!',
		'11:05'),
	chat4: chat('newMassage', 'no chat!', '/choseChat', undefined, 'no chat!', '03:00', '10'),
}

export default tpl(props);
