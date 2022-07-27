import tpl from './tpl.hbs';
import button from '../../components/button';
import avatar from '../../components/avatar';
import blueCircle from '../../components/blueCircle';
import src from '../../image/cat.png';
import input from '../../components/input';

const props = {
	btnSave: button('btn_saveChange', 'Сохранить'),
	avatarLog: avatar(`${src}`, 'Иван'),
	prevArrow: blueCircle('arrow', '/profile'),
	changeProfile: input('profile'),

}

export default tpl(props);