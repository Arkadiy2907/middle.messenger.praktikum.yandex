import tpl from './tpl.hbs';
import pageError from '../../components/pageError';

const props = {
	pageError404: pageError('404'),
}

export default tpl(props);