import Router from './core/router/Router';
import Login from './pages/login';
import FourHundredFour from './pages/fourHundredFour';
import FiveHundred from './pages/fiveHundred';
import Registration from './pages/registration';
import ChooseChat from './pages/chooseChat';
import Profile from './pages/profile';
import ChangeProfile from './pages/changeProfile';
import ChangePassword from './pages/changePassword';
import LoadAvatar from './pages/loadAvatar';
import './scss/style.scss';

export const router = new Router('#root');

document.addEventListener('DOMContentLoaded', () => {
    router
        .use('/', Login)
        .use('/login', Login)
        .use('/registration', Registration)

        .use('/chooseChat', ChooseChat)
        .use('/chooseChatActive', ChooseChat)

        .use('/profile', Profile)
        .use('/changeProfile', ChangeProfile)
        .use('/changePassword', ChangePassword)

        .use('/loadAvatar', LoadAvatar)

        .use('/fiveHundred', FiveHundred)
        .use('/fourHundredFour', FourHundredFour)
        .use('*', FiveHundred)
        .start();
});
