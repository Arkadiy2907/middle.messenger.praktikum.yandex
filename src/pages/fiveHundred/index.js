import tpl from './tpl.hbs';
import pageError from '../../components/pageError';

const props = {
	pageError500: pageError('500'),
}

export default tpl(props);