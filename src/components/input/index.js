import tplInputProfile from './tplInputProfile.hbs';
import tplInputIndex from './tplInputIndex.hbs';
import tplInputProfilePas from './tplInputProfilePas.hbs';
import tplInputReg from './tplInputReg.hbs';

export default (type, readonly,
) => {
	if (type === 'index') {
		return tplInputIndex({});
	}
	if (type === 'reg') {
		return tplInputReg({});
	}
	if (type === 'profile') {
		return tplInputProfile({ readonly });
	}
	if (type === 'password') {
		return tplInputProfilePas({});
	}
};