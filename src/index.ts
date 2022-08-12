import renderDom from './service/renderDOM';
import Index from './pages/index/index';
import FourHundredFour from './pages/fourHundredFour';
import FiveHundred from './pages/fiveHundred';
import Registration from './pages/registration';
import ChooseChat from './pages/chooseChat';
import SearchChat from './pages/searchChat';
import ChatOnline from './pages/chatOnline';
import Profile from './pages/profile';
import ChangeProfile from './pages/changeProfile';
import ChangePassword from './pages/changePassword';
import LoadAvatar from './pages/changeAvatar/loadAvatar';
import FileError from './pages/changeAvatar/fileError';
import FileOk from './pages/changeAvatar/fileOk';
import ReloadFile from './pages/changeAvatar/reloadFile';

import './scss/style.scss';

const path = window.location.pathname;
let page: any = {};

switch (path) {
case '/':
    page = new Index();
    break;
case '/index':
    page = new Index();
    break;
case '/registration':
    page = new Registration();
    break;
case '/chooseChat':
    page = new ChooseChat();
    break;
case '/searchChat':
    page = new SearchChat();
    break;
case '/chatOnline':
    page = new ChatOnline();
    break;
case '/profile':
    page = new Profile();
    break;
case '/changeProfile':
    page = new ChangeProfile();
    break;
case '/changePassword':
    page = new ChangePassword();
    break;
case '/loadAvatar':
    page = new LoadAvatar();
    break;
case '/fileError':
    page = new FileError();
    break;
case '/fileOk':
    page = new FileOk();
    break;
case '/reloadFile':
    page = new ReloadFile();
    break;
case '/fiveHundred':
    page = new FiveHundred();
    break;
case '/fourHundredFour':
    page = new FourHundredFour();
    break;
default:
    page = new FourHundredFour();
}

renderDom('#root', page);
