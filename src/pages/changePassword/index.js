import tpl from './tpl.hbs';
import button from '../../components/button';
import avatar from '../../components/avatar'
import src from '../../image/cat.png'

const props = {
	btn_saveCangePasword: button('btn_saveCangePasword', 'Сохранить'),
	avatarLog: avatar(`${src}`, 'Иван')
}

export default tpl(props);