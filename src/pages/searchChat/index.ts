import tpl from './tpl.hbs';
import Block from '../../service/Block';
import ButtonBlue from '../../components/button';
import BtnSendMassage from '../../components/btnSendMessage';
import Link from '../../components/link';
import Massage from '../../components/message';
import { getResForm } from '../../service/valid';
import src from '../../image/78.png';

export default class SearchChat extends Block {
    constructor(props: Record<string, any> = {}) {
        const signOut = new Link({ value: 'ввыход из профиля', href: '/' });
        const inProfile = new Link({ value: 'профиль', href: '/profile' });
        const buttonBlue = new ButtonBlue({
            value: 'Поиск чата',
            events: {
                click: (event) => {
                    event.preventDefault();
                    const obj = getResForm('form');
                    console.log('после ввода формы в течении 4 сек произойтет перенаправление на эту же страницу');
                    const nextPage = () => {
                        if (obj) window.location.href = '/searchChat';
                    };
                    setTimeout(nextPage, 4000);
                },
            },
        });

        const sendMassge = new BtnSendMassage({
            events: {
                click: (event) => {
                    event.preventDefault();

                    const obj = getResForm('.inputMassage');
                    if (obj) {
                        console.log('пока нет сообщения кина не будет! И сообщение как бы не уйдет');
                    }
                },
            },
        });

        const chat1 = new Massage({
            chatTitle: 'Chat Online!',
            href: '/chatOnline',
            myMassage: 'upss',
            chatMassage:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit Lorem ipsum, dolor sit amet consectetur adipisicing elit',
            time: '11:05',
        });

        super('div', {
            ...props,
            signOut,
            inProfile,
            buttonBlue,
            sendMassge,
            chat1,
            src: `${src}`,
        });
    }

    render() {
        return this.compile(tpl, this.props);
    }
}
