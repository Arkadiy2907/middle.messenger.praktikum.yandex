import tplArrow from './tplArrow.hbs';
import tplNewMassage from './tplNewMassage.hbs';
import tplSendMassage from './tplSendMassage.hbs';

export default (type, href, number) => {
	if (type === 'arrow') {
		return tplArrow({ href });
	}
	if (type === 'newMassage') {
		return tplNewMassage({ href, number });
	}
	if (type === 'sendMassage') {
		return tplSendMassage({ href });
	}
}