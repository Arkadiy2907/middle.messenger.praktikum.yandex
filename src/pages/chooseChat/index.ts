import tpl from './tpl.hbs';
import Block from '../../service/Block';
import ButtonBlue from '../../components/button';
import Link from '../../components/link';
import Massage from '../../components/message';
import { getResForm } from '../../service/valid';

export default class ChooseChat extends Block {
    constructor(props: Record<string, any> = {}) {
        const signOut = new Link({ value: 'ввыход из профиля', href: '/' });
        const inProfile = new Link({ value: 'профиль', href: '/profile' });
        const buttonBlue = new ButtonBlue({
            value: 'Поиск чата',
            events: {
                click: (event) => {
                    event.preventDefault();
                    const obj = getResForm('form');
                    console.log('после ввода формы в течении 4 сек произойтет перенаправление на след страницу');
                    const nextPage = () => {
                        if (obj) window.location.href = '/searchChat';
                    };
                    setTimeout(nextPage, 4000);
                },
            },
        });
        const chat1 = new Massage({
            chatTitle: '500!',
            href: '/fiveHundred',
            myMassage: '',
            chatMassage: 'Five Hundred! 500!',
            time: '11:00',
        });
        const chat2 = new Massage({
            chatTitle: '404!',
            href: '/fourHundredFour',
            myMassage: '',
            chatMassage: ' 404! Lorem ipsum, dolor sit amet consectetur adipisicing ',
            time: '11:00',
        });
        const chat3 = new Massage({
            chatTitle: 'Chat Online!',
            href: '/chatOnline',
            myMassage: 'upss',
            chatMassage: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit Lorem ',
            time: '11:05',
        });
        const chat4 = new Massage({
            chatTitle: 'Choose chat!',
            href: '/chooseChat',
            myMassage: '',
            chatMassage: 'no chat!',
            time: '03:00',
        });

        super('div', {
            ...props,
            signOut,
            inProfile,
            buttonBlue,
            chat1,
            chat2,
            chat3,
            chat4,
        });
    }

    render() {
        return this.compile(tpl, this.props);
    }
}
