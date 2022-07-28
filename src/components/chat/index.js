import tplChat from './tplChat.hbs';
import tplChatNewMassage from './tplChatNewMassage.hbs'
import blueCircle from '../blueCircle';

export default (
	type,
	chatTitle,
	href,
	myMassage,
	chatMassage,
	time,
	number
) => type === 'newMassage' ? tplChatNewMassage(
	{
		chatTitle,
		href,
		myMassage,
		chatMassage,
		time,
		newMassage: blueCircle('newMassage', href, number)
	}
) : tplChat(
	{
		chatTitle,
		href,
		myMassage,
		chatMassage,
		time
	}
);
