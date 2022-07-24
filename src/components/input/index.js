import tplEmail from './tplEmail.hbs';
import tplFirstName from './tplFirstName.hbs';
import tplIDisplayName from './tplIDisplayName.hbs';
import tplILogin from './tplILogin.hbs';
import tplPone from './tplPone.hbs';
import tplSecondName from './tplSecondName.hbs';

export default (name, id) => {
	if (name === 'email') return tplEmail(id);
	if (name === 'login') return tplILogin(id);
	if (name === 'first_name') return tplFirstName(id);
	if (name === 'second_name') return tplSecondName(id);
	if (name === 'display_name') return tplIDisplayName(id);
	if (name === 'phone') return tplPone(id);
};