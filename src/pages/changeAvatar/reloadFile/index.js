import tpl from './tpl.hbs';
import reloadFile from '../../../components/loadAvatar';

const props = {
	reloadFile: reloadFile(`reloadFile`)
}

export default tpl(props);