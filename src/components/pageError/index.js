import tplPageError from './tplPageError.hbs';
import button from '../button';

const props1 = {
	title: '404',
	text: 'Не туда попали',
	choseChatAgain: button('choseChat_PageError404', 'назад к чатам', '/choseChat')
}

const props2 = {
	title: '500',
	text: 'Мы уже фиксим',
	choseChatAgain: button('choseChat_PageError500', 'назад к чатам', '/choseChat')
}

export default (type) => type === '404' ? tplPageError(props1) : tplPageError(props2);