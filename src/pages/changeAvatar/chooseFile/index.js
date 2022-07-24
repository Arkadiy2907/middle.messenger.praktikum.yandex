import tpl from './tpl.hbs';
import chooseFile from '../../../components/loadAvatar';

const props = {	
	chooseFile: chooseFile(`chooseFile`)
}

export default tpl(props);