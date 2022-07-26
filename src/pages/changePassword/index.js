import tpl from './tpl.hbs';
import button from '../../components/button';
import avatar from '../../components/avatar';
import blueCircle from '../../components/blueCircle';
import input from '../../components/input';
import src from '../../image/cat.png';

const props = {
	btnSaveCangePasword: button('btn_saveCangePasword', 'Сохранить'),
	avatarLog: avatar(`${src}`, 'Иван'),
	prevArrow: blueCircle('arrow', '/profile'),
	profilePas: input('password', '/profile'),
}

export default tpl(props);