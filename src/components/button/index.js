import tplBlue from './tplBtnBlue.hbs';
import tplText from './tplBtnText.hbs';

export default (id, value, href) => !!href ? tplText({ id, value, href }) : tplBlue({ id, value });