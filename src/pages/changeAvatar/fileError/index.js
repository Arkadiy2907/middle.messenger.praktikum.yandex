import tpl from './tpl.hbs';
import fileError from '../../../components/loadAvatar';

const props = {	
	fileError: fileError(`fileError`)
}

export default tpl(props);