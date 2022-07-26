import registration from "./pages/registration";
import choseChat from "./pages/chooseChat";
import searchChat from "./pages/searchChat";
import chatOnline from "./pages/chatOnline";
import fourHundredFour from "./pages/fourHundredFour";
import fiveHundred from './pages/fiveHundred';
import index from './pages/index';
import profile from './pages/profile';
import changeProfile from './pages/changeProfile';
import changePassword from './pages/changePassword';
import loadAvatar from './pages/changeAvatar/chooseFile';
import './scss/style.scss'

const root = document.getElementById('root');

const routes = {
	'/': index,
	'/registration': registration,
	'/choseChat': choseChat,
	"/chatOnline": chatOnline,
	'/fourHundredFour': fourHundredFour,
	'/fiveHundred': fiveHundred,
	'/profile': profile,
	'/changeProfile': changeProfile,
	'/changePassword': changePassword,
	'/loadAvatar': loadAvatar,
	'/searchChat': searchChat,
};

window.onload = function () {
	const path = window.location.pathname;
	(Object.keys(routes).find(el => el === path)) ? root.innerHTML = routes[path] : root.innerHTML = fourHundredFour;
};